<template>
  <div class="max-w-xl mx-auto">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

// Регистрируем нужные модули
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

// Данные
const chartData = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Годовая инфляция (%)',
      data: [5.4, 7.5, 8.4, 20.3, 9.8, 8.6],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.3,
      pointBackgroundColor: '#1e40af',
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Инфляция в Казахстане (2019–2024)',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Проценты',
      },
    },
    x: {
      title: {
        display: true,
        text: 'Годы',
      },
    },
  },
}
</script>
