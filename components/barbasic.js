
import Chart from "react-apexcharts";
export const BarBasicPage = () => {

    const options = {
        chart: {
            type: "candlestick",
            height: 350,
        },
        title: {
            text: "Candlestick Chart Example",
            align: "left",
        },
        xaxis: {
            type: "datetime", // ใช้แบบเวลา (datetime)
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
        },
        tooltip: {
            theme: "dark",
        },
    };



    const series = [
        {
            data: [
                {
                    x: new Date(2022, 0, 1).getTime(),
                    y: [67, 69, 64, 66], // [Open, High, Low, Close]
                },
                {
                    x: new Date(2022, 0, 2).getTime(),
                    y: [66, 68, 63, 65],
                },
                {
                    x: new Date(2022, 0, 3).getTime(),
                    y: [65, 70, 63, 68],
                },
                {
                    x: new Date(2022, 0, 4).getTime(),
                    y: [68, 72, 67, 70],
                },
                // เพิ่มข้อมูลตามต้องการ
            ],
        },
    ];

    return (
        <>
            <Chart options={options} series={series} type="candlestick" width="300" />
        </>
    )
}