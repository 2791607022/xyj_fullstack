//数据业务 模式化
import Loki from 'lokijs'//js data localStroage Index 封装
//db 数据库句柄 数据库名字 数据库名字
export const db = new Loki('notes', {
  autoload: true,
  autoloadCallback: databaseInitialize,//第一次连接 执行的回调函数
  autosave: true,
  autosaveInterval: 3000,
  persistenceMethod: 'localStorage'//持久化 localStorage
})

function databaseInitialize () {
  const notes = db.getCollection('notes')//有notes 数据表吗？ 
  if (notes === null) {
    db.addCollection('notes')//添加了一个 表 notes
  }
}

export function loadCollection (collection) {//打开表
  return new Promise(resolve => {
    db.loadDatabase({}, () => {
      const _collection = db.getCollection(collection) || db.addCollection(collection)
      resolve(_collection)
    })
  })
}