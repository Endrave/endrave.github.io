var ctx = document.getElementById("myChart").getContext("2d");

/*** Gradient ***/
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
   // gradient.addColorStop(0, 'rgba(250,0,100,1)');     // red
    gradient.addColorStop(0, 'rgba(50,250,50,0.7)'); // green
gradient.addColorStop(0.7, 'rgba(36,160,200,0.5)');
    gradient.addColorStop(1, 'rgba(36,160,200,0.3)'); // blue
/***************/


var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: label,
    datasets: [
      {
        label: "Raw data",
        backgroundColor: gradient,
        borderColor: gradient,
        color:"#FFF",
        data: data,
      },
    ],
  },

  // Configuration options go here
  options: {
    
     responsive: true,
    maintainAspectRatio: false,
    legend: {
            display: false,
      labels: {
                // This more specific font property overrides the global property
                fontColor: 'white'
            }

         },
    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            beginAtZero: true, // minimum value will be 0.
            // <=> //
            min: 0,
            max: 1100,
            stepSize: 50, //
          },
        },
      ],
      xAxes: [
        {
          //type: "time",
          ticks: {
            autoSkip: true,
            maxTicksLimit: 20,
          },
        },
      ],
    },
  },

});

// var fftctx = document.getElementById("FFTChart").getContext("2d");
// var FFTchart = new Chart(fftctx, {
//   // The type of chart we want to create
//   type: "line",

//   // The data for our dataset
//   data: {
//     labels: label,
//     datasets: [
//       {
//         label: "Raw data",
//         backgroundColor: gradient,
//         borderColor: gradient,
//         data: data,
//       },
//     ],
//   },

//   // Configuration options go here
//   options: {
//     scales: {
//       yAxes: [
//         {
//           display: false,
//           ticks: {
//             beginAtZero: true, // minimum value will be 0.
//             // <=> //
//             min: 0,
//             max: 1100,
//             stepSize: 50, //
//           },
//         },
//       ],
//       xAxes: [
//         {
//           //type: "time",
//           ticks: {
//             autoSkip: true,
//             maxTicksLimit: 20,
//           },
//         },
//       ],
//     },
//   },
// });