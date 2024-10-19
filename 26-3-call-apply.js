/**
 * bind() is used to apply a object method on another object
 */
const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        return this.salary = this.salary - amount;
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

// normalPerson.chargeBill();
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);

