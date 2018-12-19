import moment from 'moment'

export const pubAt = {
  methods: {
    pubAt (date) {
      return moment(new Date(date)).utc().format('YYYY-MM-DD')
    }
  }
}

export const upAt = {
  methods: {
    upAt (date) {
      return moment(new Date(date)).utc().format('YYYY-MM-DD hh:mm')
    }
  }
}
 
export const timetrans = {
    methods: {
      timetrans (date) {
      var date = new Date(date*1000);//如果date为13位不需要乘1000
      // var Y = date.getFullYear() + '-';
      // var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      // var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
      // return Y+M+D
      return moment(date).format('YYYY-MM-DD')
    }
  }
}