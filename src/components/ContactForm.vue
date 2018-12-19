<template>
  <div class="contact-form-container">
    <mu-form ref="form" :model="validateForm" class="contact-form">
      <mu-form-item :label="$t('form.nick') + ' *'" prop="name" :rules="requireRule">
        <mu-text-field v-model="validateForm.name" prop="name"></mu-text-field>
      </mu-form-item>
      <mu-form-item :label="$t('form.subject') + ' *'" prop="industry" :rules="requireRule">
        <mu-text-field type="text" v-model="validateForm.industry" prop="industry"></mu-text-field>
      </mu-form-item>
      <mu-form-item :label="$t('form.email') + ' *'" prop="email" :rules="emailRules">
        <mu-text-field type="email" v-model="validateForm.email" prop="email"></mu-text-field>
      </mu-form-item>
      <mu-form-item :label="$t('form.tel')" prop="tel">
        <mu-text-field type="text" v-model="validateForm.tel" prop="tel"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="message" :label="$t('form.message') + ' *'" :rules="requireRule">
        <mu-text-field multi-line :rows="3" :rows-max="6" v-model="validateForm.message"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="attachment" :label="$t('form.attachment')">
        <uploader
          class="upload-area"
          :autoStart='false'
          :options="uploadOptions"
          @file-added="onFileAdded">
          <uploader-btn
            :single='true'
            :attrs="uploadAttrs">
            <template v-if="attachment">
              {{attachment.name}}
            </template>
            <template v-else>
              <mu-icon size="18" value="add"></mu-icon>
              <span>{{$t('form.uploader')}}</span>
            </template>
          </uploader-btn>
        </uploader>
      </mu-form-item>
      <div class="text-right">
        <mu-button color="primary" @click="submit">{{$t('form.send')}}</mu-button>
      </div>
    </mu-form>
  </div>
</template>

<script>
import { API_SUBMIT_ORG_MSG } from '@/libs/constant'
import { $postForm } from '@/libs/api'
import { EventBus } from '@/libs/event-bus.js'
import { emailRules, requireRule } from '@/components/mixin/validateRule'

export default {
  name: 'ContactForm',
  mixins: [emailRules, requireRule],
  data () {
    return {
      validateForm: {
        name: '',
        email: '',
        industry: '',
        tel: '',
        message: ''
      },
      attachment: null,
      uploadOptions: {
        testChunks: false,
        singleFile: true
      },
      uploadAttrs: {
        accept: 'application/pdf,image/*'
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
        const { name, email, industry, tel, message } = this.validateForm
        const formData = new FormData()
        formData.append('name', name)
        formData.append('industry', industry)
        formData.append('telephone', tel)
        formData.append('email', email)
        formData.append('content', message)
        if (this.attachment) {
          formData.append('file', this.attachment.file)
        }
        $postForm(API_SUBMIT_ORG_MSG, formData).then(resp => {
          this.$refs.form.clear()
          this.validateForm = {}
          this.attachment = null
          EventBus.$emit('toast', this.$t('toast.formSubmited'), 'success')
        })
      })
    },
    onFileAdded (file) {
      this.attachment = file
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.contact-form-container
  width 50vw
  margin 3vw auto
  .contact-form
    padding 3vw 3vw 2vw 3vw
    text-align left
    background-color #fff
    .upload-area
      width 100%
      .uploader-btn
        border 1px dashed #aaa
        display block
        width 100%
        color inherit
        padding 10px 20px
        border-radius 0
        > *
          vertical-align middle
        &:hover
          background-color transparent
  @media screen and (max-width 1000px)
    width 70vw

   .mu-input-focus-line, .mu-input__error .mu-input-line { 
     background-color: rgba(0,0,0,.12)
    }
</style>
