/**
 * Created by QCL on 2017/2/13.
 */

// exports.sayHello = function (name) {
//     console.log('Hello, ' + name);
// };
//
// exports.name = '张三';

module.exports = function () {
  var name;
  this.setName = function (name) {
      this.name = name;
  };
  this.sayHello = function () {
      console.log('Hello' + this.name);
  };
};