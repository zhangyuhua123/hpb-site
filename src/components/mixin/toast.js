export const toast = {
  data () {
    return {
      toast: false,
      toastMsg: '',
      toastType: ''
    }
  },
  methods: {
    showToast (msg, ty) {
      this.toast = true
      this.toastMsg = msg
      this.toastType = ty
      if (this.toastTimer) clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => { this.toast = false }, 3000)
    }
  }
}
