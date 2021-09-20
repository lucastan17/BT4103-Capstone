export const donutChartData = {
  type: "doughnut",
  data: {
    labels: ["Traffic Engineers", "Consultants", "General Public"],
    datasets: [
      {
        label: "Number of Users",
        data: [5, 2, 1],
        backgroundColor: [
          '#40aaad',
          '#f5a732',
          '#9fa4a7'
        ],
        hoverOffset: 4
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    cutout: 80,
    plugins: {
      title: {
        display: true,
        text: 'User Type Breakdown',
        align: 'start',
        font: {
          family: "'IBM Plex Sans', sans-serif",
          size: 18
        }
      },
      subtitle: {
        display: true,
        text: 'In Total',
        align: 'start',
        font: {
          family: "'IBM Plex Sans', sans-serif",
          size: 14
        }
      },
      legend: {
        display: false
      }
    }
  }
};

export default donutChartData;