// Chart Guru Berdasarkan Pendidikan
const labels_2 = [
    'S1',
    'S2',
    'S3',
  ];

  const data_2 = {
    labels: labels_2,
    datasets: [{
        data: [90,6,0],
      label: 'Data Guru Berdasarkan Pendidikan',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
        
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)'
    ],
    borderWidth: 1
    }]
  };

  const config_2 = {
    type: 'bar',
    data: data_2,
    options: {scales: {
        y: {
            beginAtZero: true
        }
    }
}};
  const myChart_2 = new Chart(
    document.getElementById('chart-data-guru2'),
    config_2
  );

//Chart Guru Berdasarkan Status 
  const ctx = document.getElementById('chart-data-guru');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['PNS', 'P3K', 'GTT'],
        datasets: [{
            label: 'Data Guru Berdasarkan Status',
            data: [21, 13, 62],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
