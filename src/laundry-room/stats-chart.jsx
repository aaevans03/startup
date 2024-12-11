import { Chart } from "react-google-charts";
export default function MyChart(props) {

    const data = [
        ["Time of Day", "Number of Loads"],
        ["5am", 0],
        ["6am", 0],
        ["7am", 0],
        ["8am", 0],
        ["9am", 0],
        ["10am", 0],
        ["11am", 0],
        ["12am", 5],
        ["1pm", 0],
        ["2pm", 0],
        ["3pm", 0],
        ["4pm", 0],
        ["5pm", 0],
        ["6pm", 0],
        ["7pm", 0],
        ["8pm", 0],
        ["9pm", 0],
        ["10pm", 0],
        ["11pm", 0],
    ]


    return (
        <Chart

        chartType="ColumnChart"
        data={data}
        width={"100%"}
        options={{
            legend: "none",
            // title: "",
        }}
        legendToggle
        />
  );
}