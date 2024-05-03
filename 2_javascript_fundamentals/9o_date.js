const d = new Date();
console.log(d); //2024-03-22T14:01:20.134Z

const old = new Date(2024,11,29,9,30,50);
console.log(old); //2024-12-29T04:00:50.000Z

//default everything 0
const o2 = new Date(2020);
console.log(o2); //1970-01-01T00:00:02.020Z

const o3 = new Date(10,10);
console.log(o3); // 1910-10-31T18:30:00.000Z

console.clear()
const o4 = new Date(-100000000); //100 million milli secs subtracted from default date
console.log(o4) //1969-12-30T20:13:20.000Z

const o5 = new Date(+1000000000); //100 million milli secs added from default date
console.log(o5) //1970-01-02T03:46:40.000Z

const isoDATE = new Date("1980-01-15");
console.log(isoDATE) //1980-01-15T00:00:00.000Z

console.clear();
const zeroDay = new Date(-100);
console.log(zeroDay); //1969-12-31T23:59:59.900Z
console.log(zeroDay.getTime()); //-100
console.log(zeroDay.getFullYear()); //1970
console.log(zeroDay.getDay()); //4    Sunday-0, Thursday-4

console.clear();
const zeroDay2 = new Date();
console.log(zeroDay2); //2024-03-22T14:12:24.271Z
console.log(zeroDay2.getTime()); //1711116744271
console.log(zeroDay2.getFullYear()); //2024
console.log(zeroDay2.getDay()); //5 friday's 5th day