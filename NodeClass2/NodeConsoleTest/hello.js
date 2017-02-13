/**
 * Created by QCL on 2017/2/12.
 */
module.exports = function () {
    var name;
    this.setName = function (name) {
      this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
};