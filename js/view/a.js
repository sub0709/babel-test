class BaseClass {
  msg = 'hello world'
  basePublicMethod() {
    return this.msg
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod()
  }
}

const instance = new SubClass()
console.log(instance.subPublicMethod())
// expected output: "hello worl​d"