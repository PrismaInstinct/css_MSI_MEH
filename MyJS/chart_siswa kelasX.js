// Chart Kelas X
const labels_3 = [
    'X AKL A',
    'X AKL B',
    'X BPD A',
    'X BPD B',
    'X LOG A',
    'X LOG B',
    'X MM A',
    'X MM B',
    'X MM C',
    'X OTKP A',
    'X OTKP B',
    'X PS',
    'X TB',
  ];

  const data_3 = {
    labels: labels_3,
    datasets: [{
        data: [28,26,29,26,36,34,36,36,36,28,31,21,22],
      label: 'Data Siswa Kelas X',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)'
    ],
    borderWidth: 1
    }]
  };

  const config_3 = {
    type: 'bar',
    data: data_3,
    options: {scales: {
        y: {
            beginAtZero: true
        }
    }
}};
  const myChart_3 = new Chart(
    document.getElementById('chart-data-siswaX'),
    config_3
  );

// Chart kelas XI
const labels_4 = [
    'XI AKL A',
    'XI AKL B',
    'XI BPD A',
    'XI BPD B',
    'XI LOG A',
    'XI LOG B',
    'XI MM A',
    'XI MM B',
    'XI MM C',
    'XI OTKP A',
    'XI OTKP B',
    'XI PS',
    'XI TB',
  ];

  const data_4 = {
    labels: labels_4,
    datasets: [{
        data: [22,22,31,27,30,31,30,33,32,20,19,26,26],
      label: 'Data Siswa Kelas XI',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)'
    ],
    borderWidth: 1
    }]
  };

  const config_4 = {
    type: 'bar',
    data: data_4,
    options: {scales: {
        y: {
            beginAtZero: true
        }
    }
}};
  const myChart_4 = new Chart(
    document.getElementById('chart-data-siswaXI'),
    config_4
  );
  // Chart kelas XII
  const labels_5 = [
    'XII AKL A',
    'XII AKL B',
    'XII BPD A',
    'XII BPD B',
    'XII LOG A',
    'XII LOG B',
    'XII MM A',
    'XII MM B',
    'XII MM C',
    'XII OTKP A',
    'XII OTKP B',
    'XII PS',
    'XII TB',
  ];

  const data_5 = {
    labels: labels_5,
    datasets: [{
        data: [22,22,31,27,30,31,30,33,32,20,19,26,26],
      label: 'Data Siswa Kelas XII',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)'
    ],
    borderWidth: 1
    }]
  };

  const config_5 = {
    type: 'bar',
    data: data_5,
    options: {scales: {
        y: {
            beginAtZero: true
        }
    }
}};
  const myChart_5 = new Chart(
    document.getElementById('chart-data-siswaXII'),
    config_5
  );