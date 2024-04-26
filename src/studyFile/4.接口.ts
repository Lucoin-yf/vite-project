interface Person {
  name: string
  age: number
}

//接口类型有什么，定义对应的变量时，就要遵循接口的规范
const person: Person = {
  name: "Luke",
  age: 12
}

//?表示该属性可有可无
interface Person1 {
  name: string
  age?: number
}

const person1: Person1 = {
  name: "Luke"
  //可以不写age属性
}


//readonly表示该属性只读,不可修改
interface Stu {
  readonly id: number
  name: string
}

const stu: Stu = {
  id: 1,
  name: "Luke"
}
//stu.id = 2; //报错，只读属性不可修改




interface Stu1 {
  id: number
  name: string
  [k: string]: number | string //必须是上面的父类类型，不能是单一类型
}

const stu1: Stu1 = {
  id: 12,
  name: "Luke",
  age: 12,
  gender: '男',
  location: 'China'
}


//函数
interface Sum {
  (a: number, b: number): number
}
//interface也可以，type也可以
type Sum1 = (a: number, b: number) => number

const sum1: Sum = (a, b) => {
  return a + b;
}

//接口继承
interface Animal {
  name: string
}

interface Dog extends Animal {
  age: number
}

const dog: Dog = {
  name: "dog",
  age: 2
}