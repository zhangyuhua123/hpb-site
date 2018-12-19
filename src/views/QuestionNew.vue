<template>
  <div class="ques-new">
    <mu-form ref="form" :model="form" class="form">
      <h2 class="title">{{$t('navs.newques')}}</h2>
      <mu-row gutter>
        <mu-col span="12" lg="6">
          <mu-form-item prop="email" :label="$t('form.email')" :rules="emailRules">
            <mu-text-field type='email' v-model="form.email"></mu-text-field>
          </mu-form-item>
        </mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="12" lg="6">
          <mu-form-item prop="title" :label="$t('form.title') + ' *'" :rules="requireRule">
            <mu-text-field v-model="form.title"></mu-text-field>
          </mu-form-item>
        </mu-col>
      </mu-row>
      <mu-form-item prop="content" :label="$t('form.questionContent') + ' *'" :rules="requireRule">
        <quill-editor v-model="form.content"
          ref="myTextEditor"
          :options="editorOption">
        </quill-editor>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit">{{$t('form.submit')}}</mu-button>
      </mu-form-item>
    </mu-form>
  </div>
</template>
<script>
import { emailRules, requireRule } from '@/components/mixin/validateRule'
import { quillEditor } from 'vue-quill-editor'
import { API_SUBMIT_NEW_QUESTION } from '@/libs/constant'
import { $post } from '@/libs/api'
import { EventBus } from '@/libs/event-bus.js'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  name: 'QuestionNew',
  mixins: [emailRules, requireRule],
  data () {
    return {
      form: {
        email: '',
        title: '',
        content: ''
      },
      requireEmail: false,
      editorOption: {
        placeholder: '',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image']
          ]
        }
      }
    }
  },
  components: {
    quillEditor
  },
  computed: {
    editor () {
      return this.$refs.myTextEditor.quill
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
        if (!result) {
          return
        }
        $post(API_SUBMIT_NEW_QUESTION, this.form).then(resp => {
          this.$refs.form.clear()
          this.form = {}
          EventBus.$emit('toast', this.$t('toast.formSubmited'), 'success')
          this.$router.push('/faq')
        })
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import './mixin'

.ques-new
  position relative
  z-index 10
  display block
  min-height 400px
  padding-bottom 10vw
  margin 0 auto
  width 80%
  @media screen and (max-width 1000px)
    width 100%
  .form
    background white
    padding 30px
    .title
      text-align center
      font-size 22px
      color $dark
      margin-bottom 30px
</style>
