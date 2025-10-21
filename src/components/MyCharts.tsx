import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import type { FC } from "react";

const dataset = [
    {
        month: "January",
        data: 65
    },
    {
        month: "February",
        data: 59
    },
    {
        month: "March",
        data: 80
    },
    {
        month: "April",
        data: 81
    },
    {
        month: "May",
        data: 56
    },
    {
        month: "June",
        data: 55
    },
    {
        month: "July",
        data: 40
    }
];

interface ChartsProps {
    chartType: string;
    loading: boolean;
}

const MyCharts: FC<ChartsProps> = ({ chartType, loading }) => {
    return (
        <>
            {chartType === "lineChart" ? (
                <LineChart
                    dimensions={[{ accessor: "month" }]}
                    measures={[{ accessor: "data", label: "Price" }]}
                    dataset={dataset}
                    loading={loading}
                />
            ) : (
                <BarChart
                    dimensions={[{ accessor: "month" }]}
                    measures={[{ accessor: "data", label: "Price" }]}
                    dataset={dataset}
                    loading={loading}
                />
            )}
        </>
    );
};

export default MyCharts;
