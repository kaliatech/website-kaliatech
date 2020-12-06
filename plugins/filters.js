import Vue from 'vue'
import { format } from 'date-fns'

Vue.filter('date', (value) => {
  if (!value) return ''
  const dt = new Date(value)
  return format(dt, 'yyyy-MM-dd')
})
