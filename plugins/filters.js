import Vue from 'vue'
import { format } from 'date-fns'

import _truncate from 'lodash.truncate'

Vue.filter('date', (value) => {
  if (!value) return ''
  // const dt = new Date(value) // treats as UTC, https://stackoverflow.com/a/33909265/123378
  const parts = value.split(/\D/)
  const dt = new Date(parts[0], parts[1] - 1, parts[2])
  return format(dt, 'yyyy-MM-dd')
})

Vue.filter('truncate', function (str, length = 30, omission = '...') {
  return _truncate(str, { length, omission })
})
