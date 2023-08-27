import ChartBar from "./ChartBar";
import "../styles/chart.css";
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(
        (dataPoint) => dataPoint.value
    );
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        maxValue={totalMaximum}
                        value={dataPoint.value}
                        label={dataPoint.label}
                    />
                );
            })}
        </div>
    );
};
export default Chart;
