<template>
  <div style="width: 100%; height: 500px; background-color: white; padding: 20px;">
    <v-chart :option="chartOptions" autoresize />
  </div>
</template>

<script setup>
import { use } from 'echarts/core'
import VChart from 'vue-echarts'
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'

// Register required components
use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
])

const chartOptions = {
  backgroundColor: '#ffffff',
  title: {
    text: 'Weekly Sales',
    left: 'center',
    textStyle: { fontSize: 18, color: '#333' }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' }
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    top: 30
  },
  xAxis: {
    type: 'category',
    data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    axisLine: { lineStyle: { color: '#333' } }
  },
  yAxis: {
    type: 'value',
    axisLine: { lineStyle: { color: '#333' } }
  },
  series: [
    { name: 'Email', type: 'bar', stack: 'total', data: [120,132,101,134,90,230,210] },
    { name: 'Union Ads', type: 'bar', stack: 'total', data: [220,182,191,234,290,330,310] },
    { name: 'Video Ads', type: 'bar', stack: 'total', data: [150,232,201,154,190,330,410] },
    { name: 'Direct', type: 'bar', stack: 'total', data: [320,332,301,334,390,330,320] },
    { name: 'Search Engine', type: 'bar', stack: 'total', data: [820,932,901,934,1290,1330,1320] }
  ]
}
</script>