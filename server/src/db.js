const test = require('../data/test')
const home_page = require('../data/home_page')

function responseData(data) {
  return {
    code: 0,
    msg: '请求成功',
    data
  }
}

module.exports = () => {
  return {
    test: test(),
    home_page: responseData(home_page())
  }
}
