import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardHeader,
    Text,
    List,
    ListItemStandard,
    ListItemCustom,
    ProgressIndicator,
    FlexBox,
    FlexBoxJustifyContent,
    FlexBoxWrap,
    FlexBoxDirection,
    AnalyticalTable,
    Icon
} from "@ui5/webcomponents-react";

import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";

import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";
import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";

import "@sap-ui/common-css/dist/sap-content-paddings.css";
import "@sap-ui/common-css/dist/sap-container-type.css";

import MyCharts from "../components/MyCharts";
import { MyCustomElement } from "../components/MyCustomElement/MyCustomElement";

const tableData = new Array(500).fill(null).map((_, index) => {
    return {
        name: `name${index}`,
        age: Math.floor(Math.random() * 100),
        friend: {
            name: `friend.Name${index}`,
            age: Math.floor(Math.random() * 100)
        }
    };
});

const tableColumns = [
    {
        Header: "Name",
        accessor: "name" // String-based value accessors!
    },
    {
        Header: "Age",
        accessor: "age"
    },
    {
        Header: "Friend Name",
        accessor: "friend.name"
    },
    {
        Header: "Friend Age",
        accessor: "friend.age"
    }
];

const Home = () => {
    const [chartType, setChartType] = useState("lineChart");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const contentTitle = chartType === "lineChart" ? "Line Chart" : "Bar Chart";
    const switchToChart =
        chartType === "lineChart" ? "Bar Chart" : "Line Chart";

    const handleHeaderClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setChartType((prevState) =>
                prevState === "lineChart" ? "barChart" : "lineChart"
            );
        }, 5000);
    };

    const handleProgressHeaderClick = () => {
        navigate("/detail");
    };

    return (
        <>
            <MyCustomElement />
            <div className="sap-container-type-inline-size">
                <FlexBox
                    justifyContent={FlexBoxJustifyContent.Center}
                    wrap={FlexBoxWrap.Wrap}
                    className="sap-content-paddings-container"
                >
                    <Card
                        header={
                            <CardHeader
                                titleText="Prices"
                                subtitleText={`Click here to switch to ${switchToChart}`}
                                avatar={
                                    <Icon
                                        name={
                                            chartType === "lineChart"
                                                ? lineChartIcon
                                                : barChartIcon
                                        }
                                        accessibleName={contentTitle}
                                    />
                                }
                                interactive
                                onClick={handleHeaderClick}
                            />
                        }
                        style={{
                            width: "300px",
                            margin: "var(--sapContent_Margin_Small)"
                        }}
                    >
                        <Text style={{ padding: "var(--sapContent_Space_S)" }}>
                            {contentTitle}
                        </Text>

                        <MyCharts chartType={chartType} loading={loading} />
                    </Card>

                    <Card
                        header={
                            <CardHeader
                                titleText="Progress"
                                subtitleText="List"
                                avatar={<Icon name={listIcon} />}
                                interactive
                                onClick={handleProgressHeaderClick}
                            />
                        }
                        style={{
                            width: "300px",
                            margin: "var(--sapContent_Margin_Small)"
                        }}
                    >
                        <List>
                            <ListItemStandard
                                additionalText="finished"
                                additionalTextState={ValueState.Positive}
                            >
                                Activity 1
                            </ListItemStandard>
                            <ListItemStandard
                                additionalText="failed"
                                additionalTextState={ValueState.Negative}
                            >
                                Activity 2
                            </ListItemStandard>
                            <ListItemCustom>
                                <FlexBox
                                    direction={FlexBoxDirection.Column}
                                    fitContainer
                                    style={{
                                        paddingBlock:
                                            "var(--sapContent_Space_S)"
                                    }}
                                >
                                    <FlexBox
                                        justifyContent={
                                            FlexBoxJustifyContent.SpaceBetween
                                        }
                                    >
                                        <Text
                                            style={{
                                                fontSize:
                                                    "var(--sapFontLargeSize)"
                                            }}
                                        >
                                            Activity 3
                                        </Text>
                                        <Text
                                            style={{
                                                color: "var(--sapCriticalTextColor)"
                                            }}
                                        >
                                            in progress
                                        </Text>
                                    </FlexBox>
                                    <ProgressIndicator
                                        value={89}
                                        valueState={ValueState.Positive}
                                        style={{ marginBlockStart: "0.5rem" }}
                                    />
                                </FlexBox>
                            </ListItemCustom>
                            <ListItemCustom>
                                <FlexBox
                                    direction={FlexBoxDirection.Column}
                                    fitContainer
                                    style={{
                                        paddingBlock:
                                            "var(--sapContent_Space_S)"
                                    }}
                                >
                                    <FlexBox
                                        justifyContent={
                                            FlexBoxJustifyContent.SpaceBetween
                                        }
                                    >
                                        <Text
                                            style={{
                                                fontSize:
                                                    "var(--sapFontLargeSize)"
                                            }}
                                        >
                                            Activity 3
                                        </Text>
                                        <Text
                                            style={{
                                                color: "var(--sapCriticalTextColor)"
                                            }}
                                        >
                                            in progress
                                        </Text>
                                    </FlexBox>
                                    <ProgressIndicator
                                        value={5}
                                        valueState={ValueState.Negative}
                                        style={{ marginBlockStart: "0.5rem" }}
                                    />
                                </FlexBox>
                            </ListItemCustom>
                        </List>
                    </Card>

                    <Card
                        header={
                            <CardHeader
                                titleText="AnalyticalTable"
                                avatar={<Icon name={tableViewIcon} />}
                            />
                        }
                        style={{
                            maxWidth: "900px",
                            margin: "var(--sapContent_Margin_Small)"
                        }}
                    >
                        <AnalyticalTable
                            data={tableData}
                            columns={tableColumns}
                            visibleRows={5}
                        />
                    </Card>
                </FlexBox>
            </div>
        </>
    );
};

export default Home;
