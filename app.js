'use strict'

// 载入依赖模块
var Koa = require('koa');
var logger = require('koa-logger');
var session = require('koa-session');
var bodyParse = require('koa-bodyparser');

// 建立koa实例
var app = new Koa();

// 使用中间件
app.keys = ['koa-full-stack'];
app.use(logger());
app.use(session(app));
app.use(bodyParse());

//引入router
var router = require('./config/routes')();
app
	.use(router.routes())
	.use(router.allowedMethods())

// 监听端口
app.listen(3000);
console.log('listening: 3000');