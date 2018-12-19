import { regexEmail } from '@/libs/constant'

export const emailRules = {
  data () {
    return {
      requireEmail: true
    }
  },
  computed: {
    emailRules () {
      const rule = [
        {
          validate: (val) => {
            if (val) {
              return regexEmail.test(val)
            }
            return true
          },
          message: this.$t('form.invaildEmail')
        }
      ]
      if (this.requireEmail) {
        rule.push({
          validate: (val) => !!val,
          message: this.$t('form.requiredEmail')
        })
      }
      return rule
    }
  }
}

export const requireRule = {
  computed: {
    requireRule () {
      return [
        {
          validate: (val) => !!val,
          message: this.$t('form.required')
        }
      ]
    }
  }
}
