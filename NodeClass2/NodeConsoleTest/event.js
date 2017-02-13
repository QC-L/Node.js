/**
 * Created by QCL on 2017/2/12.
 */
var http = require('http');
var server = http.createServer();
// 获取指定事件的事件处理函数的数量
var event = require('events');
console.log(event.EventEmitter.listenerCount(server, 'request'));
// EventEmitter自身拥有的事件
server.on('newListener', function (e, f) {
    console.log('对' + e + ' 事件添加事件处理函数');
    console.log(f);
});
server.on('removeListener', function (e, f) {
    console.log('对' + e + ' 事件取消事件处理函数');
    console.log(f);
});
server.removeAllListeners('newListener');
server.on('request', function (req, res) {
   console.log(req.url);
});
server.on('request', function (req, res) {
    console.log('接收客户端请求');
    res.end('Hello, 你好');
});
server.on('request', function (req, res) {
    console.log('响应完毕');
});
server.listen(3000);
console.log(server.listeners('request'));
// 默认情况下, 事件列表最多可以绑定10个事件处理函数
// 可以通过setMaxListeners方法修改绑定的最多事件数量
server.setMaxListeners(200);
server.once('request', function (req, res) {
    console.log('只执行一次哟');
});

var func = function () {
    console.log('这个方法不会执行');
};
server.on('request', func);
server.removeListener('request', func);

// 移除全部
server.removeAllListeners('request');
server.on('request', function (req, res) {
    res.end('Hello, Node.js');
});

// 自定义事件
server.on('customEvent', function (arg1, arg2, arg3) {
   console.log('自定义事件触发');
   console.log(arg1);
   console.log(arg2);
   console.log(arg3);
});
// 触发自定义事件
server.emit('customEvent', '张三', 1000, '学生');
