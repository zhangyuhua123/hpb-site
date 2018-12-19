<template>
  <div class="mail-subscribe-form-container">
    <mu-form
      ref="form"
      :model="validateForm"
      class="mail-subscribe-form">
      <mu-form-item label-float :label="$t('form.nick') + ' *'" prop="name" :rules="requireRule">
        <mu-text-field type="text" v-model="validateForm.name" prop="name"></mu-text-field>
      </mu-form-item>
      <mu-form-item label-float :label="$t('form.email') + ' *'" prop="email" :rules="emailRules">
        <mu-text-field type="email" v-model="validateForm.email" prop="email"></mu-text-field>
      </mu-form-item>
      <!-- <mu-form-item label-float :label="$t('form.wallet') + ' *'" prop="wallet" :rules="walletRules">
        <mu-text-field type="text" v-model="validateForm.wallet" prop="wallet"></mu-text-field>
      </mu-form-item>
      <mu-form-item label-float label="Telegram ID" prop="telegram">
        <mu-text-field type="text" v-model="validateForm.telegram" prop="telegram"></mu-text-field>
      </mu-form-item> -->
      <div class="text-right">
        <mu-button color="primary" @click="submit">{{$t('form.subscribe')}}</mu-button>
      </div>
    </mu-form>
  </div>
</template>

<script>
import { API_CREATE_MAIL_SUBSCRIBE } from '@/libs/constant'
import { $post } from '@/libs/api'
import { EventBus } from '@/libs/event-bus.js'
import { emailRules, requireRule } from '@/components/mixin/validateRule'

export default {
  name: 'MailSubscribeForm',
  mixins: [emailRules, requireRule],
  data () {
    return {
      validateForm: {
        name: '',
        email: ''
        // wallet: '',
        // telegram: ''
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', this.validateForm)
        if (!result) {
          return
        }
        const { email, name } = this.validateForm
        $post(API_CREATE_MAIL_SUBSCRIBE, {
          email,
          name
        }).then((resp) => {
          this.$refs.form.clear()
          this.validateForm = {}
          EventBus.$emit('toast', this.$t('toast.subscribed'), 'success')
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.mail-subscribe-form-container
  width 50vw
  margin 3vw auto
  .mail-subscribe-form
    padding 3vw 3vw 2vw 3vw
    text-align left
    background-color #fff
  @media screen and (max-width 1000px)
    width 70vw
</style>
