// 服务层是为控制层打工的（提供数据）
'use strict'

const Service = require('egg').Service

class DiaryService extends Service {
  async list() {
    const { ctx } = this
    try {
      // 从数据取数据
      const result = await ctx.app.mysql.select('diary')
      return result
    } catch (error) {
      console.log(error);
      return null
    }
  }
  async add(params) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.insert('diary', params)
      return result
    } catch (error) {
      console.log(error);
      return null
    }
  }
  async update(params,id) {
    const { ctx } = this
    try {
      const result = await ctx.app.mysql.update('diary', params,{
        where:{id}
      })
      return result
    } catch (error) {
      console.log(error);
      return null
    }
  }
  async diaryById(id) {
    const { ctx } = this
    console.log(ctx.params,'0000')
    if (!id) {
      console.log('id不能为空');
      return null
    }
    try {
      const result = await ctx.app.mysql.select('diary', {
        where: { id }
      })
      console.log(result,'*----')
      return result
    } catch (error) {
      console.log('+++++')
      console.log(error);
      return null
    }
  }
}

module.exports = DiaryService