// code goes here

var Dog = function (size, bredFor) {
  this.size = size
  this['bred for'] = bredFor
}

var createDog = function (arr) {
  var obj = {}
  arr.forEach(function (ele) {
    obj[ele[0]] = new Dog(ele[1], ele[2])
  })
  return obj
}

// export block here
module.exports = {
  createDog: createDog
}

