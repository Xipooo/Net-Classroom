const newName = (firstName, lastName) => {
    let nameIntro = "Your name is ";
    const makeFullName = () => nameIntro + firstName + " " + lastName;
    return makeFullName();
}

console.log(newName("John", "Smith"));