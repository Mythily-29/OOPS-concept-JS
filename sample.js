// class Calculation{
//     constructor(one,two){
//         this.one=one;
//         this.two=two;
//     }
//     addition(){
//         console.log(this.one + this.two)
//     }
//     subtraction(){
//         console.log(this.one - this.two)
//     }
//     multiply(){
//         console.log(this.one * this.two)
//     }
//     division(){
//         console.log(this.one / this.two)
//     }
// }

// const add=new Calculation(5,2)


// add.addition();
// add.subtraction();
// add.multiply();
// add.division();

// class Vehicle{
//     constructor(color,spec,type){
//         this.color=color;
//         this.spec=spec;
//         this.type=type
//     }
//     details(){
//         console.log(`the car color is ${this.color} and it is ${this.spec} fuel type is ${this.type}`)
//     }
// }

// class Child extends Vehicle{
//     constructor(color,spec,type,price){
//         super(color,spec,type)
//             this.price=price;
//     }
//     detailsPrice(){
//         console.log(`the car color is ${this.color} and it is ${this.spec} fuel type is ${this.type}.The price is ${this.price}`)
//     }
// }


// const show=new Vehicle('Red','Automated','battery')
// const extra=new Child('Black','Automated','Petrol',100000);


// show.details();
// extra.detailsPrice()

// class Animal{
//     constructor(color,food,drink){
//         this.color=color
//         this.food=food
//         this.drink=drink
//     }
// }

// class Dog extends Animal{
//     constructor(color,food,drink,sound){
//         super(color,food,drink)
//         this.sound=sound
//     }
//     dogDetail(){
//         console.log(this.color,this.food,this.drink,this.sound)
//     }
// }
// class Cat extends Animal{
//     constructor(color,sound){
//         super(color)
//         this.sound=sound
//     }
//     catDetail(){
//         console.log(this.color,this.sound)
//     }
// }
// const shows = new Dog('brown','chicken','juice','bow bow')
// const show = new Cat('brown','meow meow')

// shows.dogDetail()
// show.catDetail()


// class Employee{
//     constructor(name,age,designation){
//         this.name=name;
//         this.age=age;
//         this.designation=designation
//     }
//     allDetails(){
//         console.log(`Name: ${this.name} age : ${this.age} job title : ${this.designation}`)
//     }
// }

// class Manager extends Employee{
//     constructor(name,age,designation,manage){
//         super(name,age,designation)
//         this.manage=manage
//     }
//     test(){
//         super.allDetails()
//         console.log(`Manager has ${this.manage} employees`)
//     }

// }

// const show = new Manager('Anu',19,'Manager',5)
// show.test()

//class

// class Base{
//     constructor(name,color){
//         this.name=name;
//         this.color=color;
//     }
//     print(){
//         console.log( `My name is ${this.name} and my fav color is ${this.color}`)
//     }
// }

// const show= new Base('Ram','Black')
// show.print()


// Inheritance

// class Child extends Base{
//     constructor(name,color,age){
//         super(name,color)
//         this.age=age;
//     }
//     display(){
//         super.print()
//         console.log(this.age)
//     }
// }
// const showone=new Child('Anu','white',19)
// showone.display();

// getter and setter

// class Student {
//     constructor(username, phonenumber) {
//         this.username = username;
//         this.phonenumber = phonenumber;
//     }
//     get details() {
//         return 'Username is'+ " "+ this.username + " " + 'authorized' +" "+this.phonenumber;
//     }

//     set Phonecheck(phonenumber) {
//         if (phonenumber.length == 10) {
//             this.phonenumber = 'valid'
//             console.log(this.phonenumber)
//         }
//         else {
//             throw new Error('Inclueds 10numbers only')
//         }
//     }
// }

// const show = new Student('Priya', '9840258373')
// console.log(show.details)
// show.Phonecheck='9840258373'
// console.log(show.details);


//Encapsulation

// class Secure{
//     #balance;
//     constructor(username,bankname,openingBalance){
//         this.username=username
//         this.bankname=bankname;  
//         this.#balance= openingBalance 
//     }

//     get bankdetails(){
//         console.log(`${this.username} ${this.bankname} ${this.#balance}`)
//     }
//     set changeBalance(balance){
//         if(balance > 2000){
//             this.#balance +=balance
//             console.log(this.#balance)
//         }
//         else{
//             throw new Error("invalid balance")
//         }
//     }
// }

// const show=new Secure("mythili","hdfc",5000)
// show.bankdetails;

// show.changeBalance=2001

// show.bankdetails

// polymorphism overwrites the parent method

// class Poly{
//     showdetails(name){
//         console.log(name)
//     }
// }

// class Child extends Poly{
//     showdetails(name){
//         console.log(name)
//     }
// }
// class Next extends Poly{
//     showdetails(name){
//         console.log(name)
//     }
// }
// const show=new Poly()
// show.showdetails('Divakar');
// show.showdetails('Ram');
// show.showdetails(20)

//static 

class Reserved{

    static square(num){
       console.log(`Square of ${num}:`,num * num)
       console.log(`Square of ${num}:`,num + num)
    }
    static name="Doraemon"

}
Reserved.square(6);
console.log(Reserved.name)


