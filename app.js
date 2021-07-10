const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];
const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 10, 2, 20, 30, 45],
    }]
};
const config = {
    type: 'line',
    data,
    options: {}
}

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
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 10, 2, 20, 30, 45],
            }],
        },
        options: {}

    }

);
