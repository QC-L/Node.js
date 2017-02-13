/**
 * Created by QCL on 2017/2/13.
 */
// global
console.log(global);

// __dirname __filename
// 获取当前文件所处文件夹路径
console.log(__dirname);
// 获取当前文件所处完整路径
console.log(__filename);

// 设置延迟多少毫秒做某事
// 参数1: 回调函数
// 参数2: 延迟多少毫秒执行(1 ~ 2147483647)
// 参数3以后: 回调函数中所需要的参数的值, 依次填入
var timer = setTimeout(function (name, age) {
    console.log('本人叫' + name + ', 今年' + age + '岁');
}, 1000, '张三', 38);
console.log('哈哈哈哈哈');
console.log('哈哈哈哈哈');
console.log('哈哈哈哈哈');
console.log('哈哈哈哈哈');
console.log('哈哈哈哈哈');
console.log('哈哈哈哈哈');
console.log('哈哈哈哈哈');
console.log('哈哈哈哈哈');
// 清除延迟做某事
// clearTimeout(timer);

// 设置间隔多少毫秒做某事
// 参数1: 回调函数
// 参数2: 间隔 单位: 毫秒
// 参数3以后: 回调需要的参数
var interVal = setInterval(function () {
    console.log('我疯了');
}, 1000);
// 清除间隔做某事
clearInterval(interVal);

// 使用以下两个函数, 可能会出现性能方面的问题(慎用)
// 取消回调函数的回调
timer.unref();
// 恢复回调函数的回调
timer.ref();