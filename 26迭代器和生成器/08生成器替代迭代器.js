// 生成器 替代迭代器
function* createArrayIterator(arr) {
  // 第一种写法
  // let index = 0;
  //  yield arr[index++];
  //  yield arr[index++];
  //  yield arr[index++];
  // 第二种写法
  // for (const item of arr) {
  //     yield item
  // }
  // yield* 生成一个可迭代对象
  yield* arr;
  // return {
  //     next: function() {
  //         if (index<arr.length) {
  //             return {done: false,value: arr[index++]}
  //         }else {
  //             return {done: true,value:undefined}
  //         }
  //     }
  // }
}
const names = ["a", "b", "c"];
const namesIterator = createArrayIterator(names);
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());

// 创建一个函数 可以迭代一个范围内的数字
// 10 20
function* createRangeIterator(start, end) {
  //   let index = start;
  //   return {
  //     next: function () {
  //       if (index < end) {
  //         return { done: false, value: index++ };
  //       } else {
  //         return { done: true, value: undefined };
  //       }
  //     },
  //   };
  let index = start;
  while (index++ < end) {
    yield index;
  }
}
const rangeIterator = createRangeIterator(10, 20);
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());

// class 案例
class Classroom {
  constructor(address, name, students) {
    this.address = address;
    this.name = name;
    this.students = students;
  }
  entry(newStudent) {
    this.students.push(newStudent);
  }
  foo = () => {
    console.log("foo function");
  };
  *[Symbol.iterator]() {
    yield* this.students;
  }
}
const classroom = new Classroom("sdaf", "1102", ["asdf", "sgasd"]);
classroom.foo();
for (const item of classroom) {
  console.log(item);
}
