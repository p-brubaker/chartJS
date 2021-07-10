// const labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
// ];
// const data = {
//     labels: labels,
//     datasets: [{
//         label: 'My First dataset',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: [0, 10, 10, 2, 20, 30, 45],
//     }]
// };
// const config = {
//     type: 'line',
//     data,
//     options: {}
// }

let ctx = document.getElementById('myChart');

// === include 'setup' then 'config' above ===

var myChart = new Chart(ctx,
    {
        type: 'pie',
        data:{
            labels:['January',
            'February',
            'March',
            'April',
            'May',
            'June',],
            datasets:[{
                label: 'My First dataset',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: 'rgb(255, 99, 200)',
                data: [0, 10, 10, 2, 20, 30, 45],
            }],
        },
        options: {}

    }

);

let ctx1 = document.getElementById('new-chart');

var myChart = new Chart(ctx1,
    {
        type: 'line',
        data:{
            labels:['January',
            'February',
            'March',
            'April',
            'May',
            'June',],
            datasets:[{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 10, 2, 20, 30, 45],
            }],
        },
        options: {}

    }

);

