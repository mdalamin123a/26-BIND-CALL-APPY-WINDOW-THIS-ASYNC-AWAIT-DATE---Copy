const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        return this.salary = this.salary - amount;
    }
};

normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);

// console.log(normalPerson.firstName);