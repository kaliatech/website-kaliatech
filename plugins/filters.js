import Vue from 'vue'
import { format } from 'date-fns'

import _truncate from 'lodash.truncate'

Vue.filter('date', (value) => {
  if (!value) return ''
  const dt = new Date(value)
  return format(dt, 'yyyy-MM-dd')
})

Vue.filter('truncate', function (str, length = 30, omission = '...') {
  return _truncate(str, { length, omission })
})
