const a = 4;
const b = 6;
console.log(a, b, a + b);
console.log("%s", a); // stringifies a
console.count("test");
console.count("test");
console.count("test");
//op
// test: 1
// test: 2
// test: 3

//console.clear();
console.log("That clear command wiped everything until this");

console.warn("warn"); //nothing special in op
console.info("info"); //same here

console.table([
  { a: 1, b: 2 },
  { a: 3, b: 4, c: 5 },
]);
//op in tablar format, c blank for first object
// ┌─────────┬───┬───┬───┐
// │ (index) │ a │ b │ c │
// ├─────────┼───┼───┼───┤
// │    0    │ 1 │ 2 │   │
// │    1    │ 3 │ 4 │ 5 │
// └─────────┴───┴───┴───┘
