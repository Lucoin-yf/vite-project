// 元组
const list: [number, string, boolean, object] = [1, '2', true, {}]

//联合类型 
let a: number | string; // a 可以是 number 类型，也可以是 string 类型
// 交叉类型
const user: [{ id: number, name: string, age: number }] = [{ id: 12, name: 'jack', age: 30 }]

//但是有时候只想要age类型,就重复了
const AgeType: object = [{ age: 30 }]


// 可以这样
type AgeType = { age: number }
type UserType = { id: number, name: string }
const user2: AgeType & UserType = { id: 12, name: 'jack', age: 30 }

