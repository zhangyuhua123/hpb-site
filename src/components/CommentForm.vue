<template>
  <div class="comment-form-container">
    <mu-form ref="form" :model="validateForm" class="comment-form">
      <mu-form-item :label="$t('form.comment.name') + ' *'" prop="name" :rules="requireRule">
        <mu-text-field v-model="validateForm.name" prop="name"></mu-text-field>
      </mu-form-item>
      <mu-form-item :label="$t('form.email') + ' *'" prop="email" :rules="emailRules">
        <mu-text-field type="email" v-model="validateForm.email" prop="email"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="content" :label="$t('form.comment.content') + ' *'" :rules="requireRule">
        <mu-text-field multi-line :rows="3" :rows-max="6" v-model="validateForm.content"></mu-text-field>
      </mu-form-item>
      <div class="text-right">
        <mu-button color="primary" @click="submit">{{$t('form.send')}}</mu-button>
      </div>
    </mu-form>
  </div>
</template>

<script>
import { EventBus } from '@/libs/event-bus.js'
import { emailRules, requireRule } from '@/components/mixin/validateRule'
import { $post } from '@/libs/api'

export default {
  name: 'CommentForm',
  mixins: [emailRules, requireRule],
  props: ['url'],
  data () {
    return {
      validateForm: {
        name: '',
        email: '',
        content: ''
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
        if (!result) {
          return
        }
        $post(this.url, this.validateForm).then(resp => {
          this.$refs.form.clear()
          EventBus.$emit('toast', this.$t('toast.formSubmited'), 'success')
          this.$emit('done', this.validateForm)
          this.validateForm = {}
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.comment-form-container
  width 50vw
  margin 3vw auto
  .comment-form
    padding 3vw 3vw 2vw 3vw
    text-align left
    background-color #fff
  @media screen and (max-width 1000px)
    width 100%
</style>
