interface User {
  id: number,
  name: string,
  age: number
}

// type Keys = "id" | "name" | "age"
type Keys = keyof User;

const user1 = { name: 'jack', age: 30, id: 12 }
type usetype = typeof user1;

type user3 = {
  [k in Keys]: string
}
const user2: user3 = {
  id: '12',
  name: 'jack',
  age: '30',
}

export default {} // 为了解决模块化问题，这里导出一个空对象
