//json objects cant have methods, json string keys has to be in ""....

const obj = {
  1: 2,
  2: true,
  7: {
    pankaj: "pushpavalli",
    4: 5,
  },
  person1: {
    fname: "Albinder",
    sname: "Dhindsa",
  },
  person2: {
    fname: "Deepinder",
    sname: "Goyal",
  },

  person3: {
    fname: "Surabh",
  },

  blinkit: function () {
    return obj.person1.fname + " " + this.person1.sname ; //Albinder Dhindsa     // + " " + person3.fname = > error person3 not defined
  },
};

console.log(obj.person1.fname, obj["person1"]["sname"]);
console.log(obj[7].pankaj); //pushpavalli
console.log(obj.blinkit());
