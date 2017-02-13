/**
 * Created by QCL on 2017/2/12.
 */
// console.error 错误
console.error('This is error string');
// console.dir 打印对象
var user = new Object();
user.name = "曹政";
user.getName = function () {
    return this.name;
};
user.setName = function (name) {
    this.name = name;
};
console.dir(user);
// console.trace 将当前位置的栈信息作为标准错误信息进行输出
user.name = '老郝';
user.getName = function () {
  return this.name;
};
user.setName = function (name) {
    this.name = name;
};
console.trace(user.name);
// console.time console.timeEnd
console.time('small loop');
for (var i = 0; i < 100; i++) {
    // console.time('test loop');
    // for (var j = 0; j < 10; j++) {
    //     ;
    // }
    // console.timeEnd('test loop');
}
console.timeEnd('small loop');

// console.assert 断言, 用于抛出异常信息
// console.assert(1 == 22, '1 不等于 22');
