/**
 * Created by QCL on 2017/2/13.
 */
// 打印错误提示
console.error('这里代码有问题');

var user = new Object();
user.name = '曹政';
// 打印对象信息
console.dir(user);
// 打印栈信息
// console.trace('这里代码有问题');
// console断言
console.assert(1 > 20, '1 不大于 20');
// 时间计时打印
console.time('timer');
for (var i = 0; i < 100000000; i++) {
    ;
}
console.timeEnd('timer');