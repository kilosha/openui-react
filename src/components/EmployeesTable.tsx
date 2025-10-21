import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Table,
    TableRow,
    TableCell,
    TableHeaderRow,
    TableHeaderCell,
    TableRowActionNavigation
} from "@ui5/webcomponents-react";

interface EmployeesData {
    id: number;
    name: string;
    username: string;
    address: Address;
    email: string;
    phone: string;
}

interface Address {
    city: string;
    street: string;
    suite: string;
}

const EmployeesTable = () => {
    const [employees, setEmployees] = useState<EmployeesData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        const getEmployees = async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            const data = await response.json();
            setEmployees(data);
            setIsLoading(false);
        };

        getEmployees();
    }, []);

    const handleNavigateClick = (id: string) => {
        navigate(`/employeeDetail/${id}`);
    };

    return (
        <Table
            loading={isLoading}
            headerRow={
                <TableHeaderRow sticky>
                    <TableHeaderCell minWidth="200px" width="200px">
                        <span>Name</span>
                    </TableHeaderCell>
                    <TableHeaderCell minWidth="200px">
                        <span>Username</span>
                    </TableHeaderCell>
                    <TableHeaderCell minWidth="200px">
                        <span>Email</span>
                    </TableHeaderCell>
                    <TableHeaderCell minWidth="100px">
                        <span>Address</span>
                    </TableHeaderCell>
                    <TableHeaderCell minWidth="200px">
                        <span>Phone</span>
                    </TableHeaderCell>
                </TableHeaderRow>
            }
            rowActionCount={1}
        >
            {employees.map((employee) => (
                <TableRow
                    key={employee.id}
                    actions={
                        <>
                            <TableRowActionNavigation
                                interactive
                                onClick={() =>
                                    handleNavigateClick(String(employee.id))
                                }
                            />
                        </>
                    }
                >
                    <TableCell>
                        <span>{employee.name}</span>
                    </TableCell>
                    <TableCell>
                        <span>{employee.username}</span>
                    </TableCell>
                    <TableCell>
                        <span>{employee.email}</span>
                    </TableCell>
                    <TableCell>
                        <span>
                            {employee.address.city}, {employee.address.street}
                            {employee.address.suite}
                        </span>
                    </TableCell>
                    <TableCell>
                        <span>{employee.phone}</span>
                    </TableCell>
                </TableRow>
            ))}
        </Table>
    );
};

export default EmployeesTable;
