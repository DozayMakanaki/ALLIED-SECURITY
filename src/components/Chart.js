import React, {useState} from "react";
import ReactApexChart from "react-apexcharts"

function Chart({sparkline, priceChange}) {
    const [chartOptions] = useState({
        series: [{
            data: [...sparkline.price],
        }],
        chart:{
            type: "area",
            height: 150,
            sparkline: {enabled: true},
            animations: {enabled: false},
        },
        tooltip: {enabled: false},
        stroke: {width: 1},
        colors: [chartColor()]

    })

    function chartColor() {
        if (priceChange <= 0) {

            return "#ff3131"
        } else {
            return "35df3e"
        }
    }

    return (
        <ReactApexChart options={chartOptions} series={chartOptions.series} className="chart" />
    )
    
}

export default Chart 