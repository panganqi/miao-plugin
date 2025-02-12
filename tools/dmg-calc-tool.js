// eslint-disable-next-line no-unused-vars
import { Data } from '#miao'
import { ProfileDmg } from '#miao.models'

export async function calcDmg (inputData, enemyLv = 86) {
  let dmg = new ProfileDmg(inputData)
  let ret = await dmg.calcData({ enemyLv })
  if (ret === false) {
    return {}
  } else {
    ret = Data.getData(ret, 'ret,msg,enemyName')
    ret.enemyLevel = enemyLv
  }
  return ret
}
