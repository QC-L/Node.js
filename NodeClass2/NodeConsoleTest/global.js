/**
 * Created by QCL on 2017/2/12.
 */
// 打印全局信息
// console.log(global);
// 打印当前所处文件目录
console.log(__dirname);
// 打印当前文件名目录
console.log(__filename);
// 延时做某事
// 参数1: 设置回调函数
// 参数2: 设置多少毫秒后执行回调 (值在 1 ~ 2147483647之间)
// 参数3以后: 需要向回调函数提供的参数
var timer = setTimeout(function (name, age) {
    console.log(name, age);
}, 1000, '张三', 1000);
// 清除延时
// clearTimeout(timer);

// 延时重复做某事
var flag = 0;
var interval = setInterval(function () {
    if (flag == 5) {
        // 清除延时重复的操作
        clearInterval(interval);
    }
    flag++;
    console.log('重复执行');
}, 1000);

// 取消函数回调
timer.unref();
// 回复函数回调
timer.ref();

// require.resolve 在REPL下有效, 查询当前完整目录
require.resolve('./hello');
var Hello = require('./hello');
var hello = new  Hello();
hello.setName('张三');
console.log(hello.name);
// 打印require的模块缓存
console.log(require.cache);
// 获取某个模块的require缓存
require.cache[require.resolve('./hello')];
// 删除缓存区中的模块缓存
delete require.cache[require.resolve('./hello')];
console.log(require.cache);
// 重新加载
var Hi = require('./hello');
// 查看缓存
console.log(require.cache);