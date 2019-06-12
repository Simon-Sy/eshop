const app = require('wx-server-sdk')

const { addUser } = require('./addUser.js')
const { getUser } = require('./getUser.js')

app.init({
  envName: 'wushufang-h36jx',
  mpAppId: 'wx22203329a468e8a1'
})

exports.main = async (event, context) => {
  const db = app.database()
  const { func, data } = event
  let res
  if (func === 'addUser') {
    res = await addUser(db, data)
  } else if (func === 'getUser') {
    res = await getUser(db, data)
  } else if (func === 'getOpenId') {
    res = event.userInfo
  }

  return {
    data: res
  }
}