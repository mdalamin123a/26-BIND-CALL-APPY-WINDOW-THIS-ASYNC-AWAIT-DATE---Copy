/**
 * call() is used to call a object method for another object . the arg is 
 * another object and 2nd arg is the method arg. it direct call the method. it not return like bind()
 * 
 * apply() works same to call(). apply() take method arg as array item
 */
const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        return this.salary = this.salary - amount - tips - tax;
    }
};

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000,
} 

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Galam',
    salary: 25000,
} 

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40]);
console.log(heroPerson.salary);
