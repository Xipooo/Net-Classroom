let person = {
    firstName: "John",
    lastName: "Smith",
    getFullName: () => this.firstName + " " + this.lastName
}
console.log(person.getFullName());