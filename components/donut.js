
import Chart from "react-apexcharts";
export const DonutPage = () => {

    const options = {
        chart: {
            type: "donut"
        },
        labels: ["สินค้า A", "สินค้า B", "สินค้า C", "สินค้า D"],
        colors: ["#FF4560", "#008FFB", "#00E396", "#FEB019"], // สีของแต่ละส่วน
        legend: {
            position: "bottom" // ตำแหน่งของ legend
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "65%" // ปรับขนาดรูตรงกลาง
                }
            }
        },
        dataLabels: {
            enabled: true, // เปิด/ปิด Label บนกราฟ
            formatter: (val) => `${val.toFixed(1)}%`
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: (val) => `${val} ชิ้น` // หน่วยที่แสดงตอน hover
            }
        }
    };

    const series = [44, 55, 13, 33];

    return (
        <>
            <Chart options={options} series={series} type="donut" width="300" />
        </>
    )
}