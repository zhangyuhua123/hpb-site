export const regexEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
export const RESP_OK_CODE = '0000'
export const RESP_USED_EMAIL_CODE = '0001'
export const API_CREATE_MAIL_SUBSCRIBE = '/subscribes'
export const API_SUBMIT_ORG_MSG = '/opportunities'
export const API_FETCH_BLOG_LIST = '/blogs'
export const API_BLOG_SEARCH_AUTO = '/blogs/autosearch'
export const API_BLOG_DETAIL = '/blogs/detail'
export const API_QUESTION_LIST = '/questions'
export const API_QUESTION_DETAIL = '/questions/detail'
export const API_SUBMIT_COMMENT_BLOG = '/blogs/create_comment'
export const API_SUBMIT_COMMENT_FAQ = '/questions/create_comment'
export const API_BLOG_COMMENT_LIST = '/blogs/list_comments'
export const API_FAQ_COMMENT_LIST = '/questions/list_comments'
export const API_SUBMIT_NEW_QUESTION = '/questions'
export const API_QUESTION_CATEGORY = '/question_categories'
export const API_PROJECTS_LIST = '/projects'
export const API_PROJECT_APPLICATIONS_CREATE = '/project_applications'
export const API_DOCUMENT_LIST = '/documents'
export const API_FILES_LIST = '/documents/list_files'
export const API_FILE_DETAIL = '/documents/detail'
export const API_VOTE_RECORDS = '/vote_records'
export const API_RECORDS_DATA = '/vote_records/vote_detail'
export const API_TERMS = '/terms'
export const API_CANDIDARES = '/candidates'
export const SOCIAL_LIST = [
  {
    name: 'Github',
    sub: 'HPB Project',
    url: 'https://github.com/hpb-project'
  },
  {
    name: 'Reddit',
    sub: 'HPB_Global',
    url: 'https://www.reddit.com/r/HPB_Global/'
  },
  {
    name: 'Telegram',
    sub: 'HPB Global',
    url: 'http://t.me/hpbglobal'
  },
  {
    name: 'Twitter',
    sub: '@HPB_Global',
    url: 'https://twitter.com/HPB_Global'
  },
  {
    name: 'Facebook',
    sub: 'HPB Blockchain',
    url: 'https://www.facebook.com/HPBGlobal/'
  },
  {
    name: 'Email',
    sub: 'HPB Email',
    url: 'mailto:hpb@hpb.io'
  }
]
export const ADDRESS = {
  1: '0x3f8898b39db867cb18dd04e93fde44d2cff7181a', // 第一期
  2: '0x9108a228990eb762b7022da28e99067da2458327'
}
export const ECO_SUB_PAGES = [
  {
    key: 'dapps',
    url: '/ecoystem'
  },
  {
    key: 'exchanges',
    url: '/ecoystem/exchanges'
  },
  {
    key: 'explorer',
    url: '/ecoystem/explorer'
  },
  {
    key: 'partners',
    url: '/ecoystem/partners'
  },
  {
    key: 'links',
    url: '/ecoystem/links'
  }
]


export const ABOUT_SUB_PAGES = [
  {
    key: 'intro',
    url: '/about'
  },
  // {
  //   key: 'mile',
  //   url: '/about/mile'
  // },
  {
    key: 'vision',
    url: '/about/vision'
  }
]
export const NODE_SUB_PAGES = [
  {
    key: 'node',
    url: 'https://www.hpb.io/node_plan_zh.pdf'
  },
  {
    key: 'Invitation',
    url: 'http://nodeplan.hpb.io/index.html'
  },
  {
    key: 'Election',
    url: 'http://nodeplan.hpb.io/regist.html'
  },
  {
    key: 'HistoryRecords',
    url: '/node/history_records'
  },
  {
    key: 'Record',
    url: '/record'
  }
]
