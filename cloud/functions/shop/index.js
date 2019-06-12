const app = require('wx-server-sdk')

const { getInformation } = require('./getInformation.js')
const { getShop } = require('./getShop.js')
const { getSku } = require('./getSku.js')

app.init({
  envName: 'wushufang-h36jx',
  mpAppId: 'wx22203329a468e8a1'
})

async function main (event, context) {
  const db = app.database()
  const { func, data } = event
  let res
  if (func === 'getInformation') {
    res = await getInformation(db)
  } else if (func === 'getShop') {
    res = await getShop(db, data)
  } else if (func === 'getSku'){
    res = await getSku(db, data)
  }
  
  return {
    context,
    data: res
  }
}

exports.main = main
