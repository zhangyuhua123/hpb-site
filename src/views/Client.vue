<template>
  <div class="client">
    <h1>{{$t('navs.client')}}</h1>
    <mu-container
      class="dapps"
      fluid
    >
      <mu-row gutter>
        <mu-col
          class="vg-col"
          span='12'
          md="6"
          lg="4"
          v-for="(item, i) in $t('client')"
          :key="i"
        >
          <mu-card>
            <mu-card-media>
              <img :src="'/img/client/' + (i + 1) + '.png'">
            </mu-card-media>
            <mu-card-title :title="item.title" />
            <mu-card-text>
              <ul>
                <li
                  v-for="(li, i1) in item.desc"
                  :key="i1"
                >
                  {{li}}
                </li>
              </ul>
            </mu-card-text>
            <mu-card-actions>
              <mu-button
                v-for="(btn, i) in item.urls"
                :key="i"
                :disabled='!btn.url'
                :href='btn.url'
                color="primary"
              >
                {{btn.title || $t('common.download')}}
              </mu-button>
            </mu-card-actions>
          </mu-card>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>
<script>
export default {
  name: "Client",
  metaInfo() {
    return {
      title: this.$t("title") + "|" + this.$t("navs.client")
    };
  },
  data() {
    return {
      openSimple: false,
      iOS: false,
      andrio: false,
    };
  },
  methods: {
  }
};
</script>
<style lang="stylus" scoped>
@import './mixin';
.client {
  padding: 30px;
  margin: 0px 50px;
  min-height: 400px;
  margin-bottom: 50px;
  color: $white;
  @media screen and (max-width: 769px) {
    margin: 0;
  }
  h1 {
    margin: 0 0 30px 0;
    text-align: center;
  }
  ul {
    padding-left: 0;
    list-style: none;
  }
  .mu-card-actions {
    height: 100px;

    .mu-button {
      text-transform: none;
      min-width: 70px;
      margin-top: 2%;
    }

    .mu-button + .mu-button {
      margin-left: 10px;
    }
    .mu-raised-button.disabled {
      background: grey;
      color: white;
    }
  }
}
.client_close{
  font-size:32px;
  font-weight:normal;
  color:#000
}
@media screen and (max-width: 769px) {
  .mu-dialog-wrapper {
    display: none !important;
  }
  .mu-overlay {
    display: none !important;
  }
}
</style>
