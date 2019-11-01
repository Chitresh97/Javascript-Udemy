console.log("Script starts");

var john = {
  name: "John",
  weight: 70,
  height: 1.8,
  calcBMI: function() {
    this.BMI = this.weight / (this.height * this.height);
    return this.BMI;
  }
};

var mark = {
  name: "Mark",
  weight: 80,
  height: 1.6,
  calcBMI: function() {
    this.BMI = this.weight / (this.height * this.height);
    return this.BMI;
  }
};
john.calcBMI();
mark.calcBMI();

if (john.BMI > mark.BMI) {
  console.log(john.name + " has the highest BMI of- " + john.BMI);
} else if (john.BMI < mark.BMI) {
  console.log(mark.name + " has the highest BMI of- " + mark.BMI);
} else {
  console.log("John and Mark have same BMI.");
}
