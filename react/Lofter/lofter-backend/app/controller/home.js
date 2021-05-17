const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.html', {
      title: '标题栏'
    })
  }
  async test() {
    const { ctx } = this
    ctx.body = '测试接口'
  }
  async list() {
    const { ctx } = this
    // 往数据库去数据返回给客户端
    const result = await ctx.service.diary.list()
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败'
      }
    }
  }
  async add() {
    const { ctx } = this
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.diary.add(params)
    if (result) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '添加失败'
      }
    }
  }
  async update() {
    const { ctx } = this
    const params = {
      ...ctx.request.body
    }
    const result = await ctx.service.diary.update(params,ctx.params.id)
    console.log(params,ctx.params.id)
    if (result.length>0) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '编辑fail'
      }
    }
  }
  async getDiaryById() {
    const { ctx } = this
    const result = await ctx.service.diary.diaryById(ctx.params.id)
    console.log(result,'+++')
    if (result.length>0) {
      ctx.body = {
        status: 200,
        data: result
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询失败'
      }
    }
  }
}

module.exports = HomeController;
