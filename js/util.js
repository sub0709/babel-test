class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world'
  }
}

const instance = new ClassWithPublicInstanceMethod()
console.log(instance.publicMethod())
// expected output: "hello worl​d"