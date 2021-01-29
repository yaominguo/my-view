let BASE_URL = ''
switch (process.env.NODE_ENV) {
  case 'production':
    BASE_URL = ''
    break
  default:
    BASE_URL = ''
}

export default {
  BASE_URL,
  TEST_URL: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js',
}
