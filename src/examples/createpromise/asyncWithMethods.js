// Creatingg a generic Promise
const asyncFunction = function (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('!');
    }, time);
  });
};

//async await on a method in an object
var userObj = {
  firstName: 'Steven',
  lastName: 'Hancock',
  async printFullName() {
    let punct = await asyncFunction(1000);
    console.log(`${this.firstName} ${this.lastName}${punct}`);
  },
};

userObj.printFullName();
