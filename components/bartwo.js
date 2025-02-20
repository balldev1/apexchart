import Chart from "react-apexcharts";

export const BarTwoPage = () => {

    const options = {
        chart: {
            type: "bar", // กำหนดประเภทเป็น bar
            toolbar: {
                show: true // แสดง/ซ่อน Toolbar (ซูม, บันทึกภาพ ฯลฯ)
            },
            zoom: {
                enabled: true // เปิด/ปิดการซูม
            },
            animations: {
                enabled: true, // เปิด/ปิดอนิเมชัน
                easing: "easeinout",
                speed: 800
            }
        },
        plotOptions: {
            bar: {
                horizontal: true, // ใช้แนวนอน
                distributed: true, // ใช้สีที่แตกต่างสำหรับแต่ละแท่ง
            }
        },
        stroke: {
            curve: "smooth", // เส้นกราฟแบบโค้งมน
            width: 2, // ความหนาของเส้น
            dashArray: 0 // 0 = เส้นปกติ
        },
        markers: {
            size: 5, // ขนาดของจุดข้อมูล
            colors: ["#ff0000"], // สีของจุด
            strokeWidth: 2
        },
        grid: {
            show: true, // แสดง/ซ่อน Grid
            borderColor: "#e0e0e0",
            strokeDashArray: 5 // กำหนดให้เส้น Grid เป็นเส้นประ
        },
        xaxis: {
            categories: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค."], // กำหนด Labels ของแกน X
            labels: {
                style: {
                    colors: "#333", // สีของ Label
                    fontSize: "14px" // ขนาดตัวอักษร
                }
            }
        },
        yaxis: {
            labels: {
                formatter: (val) => `${val} บาท` // เพิ่มหน่วยเงิน หรือหน่วยที่ต้องการ
            }
        },
        tooltip: {
            enabled: true, // เปิด/ปิด Tooltip
            theme: "dark" // กำหนดธีมของ Tooltip ("light", "dark")
        }
    };

    // กำหนดสีต่างๆ ให้กับแต่ละแท่ง
    const series = [
        {
            name: "ยอดขาย",
            data: [10, 20, 30, 40, 50],
        }
    ];

    return (
        <>
            <Chart options={options} series={series} type="bar" width="300" />
        </>
    );
}
