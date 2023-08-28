import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { months } from "@/helper/Util";
import { ChartConfiguration } from "chart.js";
import { darkOptions, lightOptions } from "../DataChart/Themes";

const DataChart = (props: ChartConfiguration) => { // Removed curly braces around props
    const { data, options } = props;
    const chartRef = useRef<HTMLCanvasElement>(null);

    const labels = months({ count: 7 });
    
    useEffect(() => {
        if (chartRef.current) {
            const chart = new Chart(chartRef.current, {
                ...props, // Specify the chart type here
                data: data,
                options: {
                    ...options,
                    ...darkOptions,
                },
            });
            
            return () => {
                chart.destroy();
            };
        }
    }, [data]);

    return <canvas ref={chartRef} />;
};

Chart.register(...registerables);

export default DataChart;
