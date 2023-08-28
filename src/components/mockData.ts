import { months } from "@/helper/Util";

const labels = months({ count: 7 });

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "CER (%)",
      data: [65, 59, 80, 81, 56, 55, 60, 49, 112, 72, 52, 43],
      fill: false,
      borderColor: "rgb(75,192,192)",
      tension: 0.1,
    },
  ],
};

export const doughnutChartData1 = {
    labels: ["Development", "Testing", "Deployment"],
    datasets: [
      {
        label: "Project Phases",
        data: [180, 120, 90],
        backgroundColor:          [ "rgb(54, 162, 235)", // Blue
        "rgb(75, 192, 192)", // Teal
        "rgb(255, 159, 64)"],// Orange,
        hoverOffset: 6,
      },
    ],
  };

  export const doughnutChartData2 = {
    labels: ["Developers", "Data Analysts", "Infrastructure Engineers"],
    datasets: [
      {
        label: "IT Company Employment",
        data: [120, 80, 60],
        backgroundColor: [
            "rgb(54, 162, 235)", // Blue
            "rgb(75, 192, 192)", // Teal
            "rgb(255, 159, 64)", // Orange
        ],
        hoverOffset: 8,
      },
    ],
  };

  export const doughnutChartData3 = {
    labels: ["North America", "Europe", "Asia", "Other"],
    datasets: [
      {
        label: "Office Locations",
        data: [8, 6, 5, 3],
        backgroundColor: [
          "rgb(54, 162, 235)", // Blue
          "rgb(75, 192, 192)", // Teal
          "rgb(255, 159, 64)", // Orange
          "rgb(201, 203, 207)", // Gray
        ],
        hoverOffset: 8,
      },
    ],
  };

  export const doughnutChartData4 = {
    labels: ["Software Products", "Consulting Services", "Cloud Solutions"],
    datasets: [
      {
        label: "Profit Margins",
        data: [25, 15, 18],
        backgroundColor: [
            "rgb(54, 162, 235)", // Blue
            "rgb(75, 192, 192)", // Teal
            "rgb(255, 159, 64)", // Orange
          ],
        hoverOffset: 8,
      },
    ],
  };
  
  
  
  