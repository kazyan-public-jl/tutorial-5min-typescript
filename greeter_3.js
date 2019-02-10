function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "kazyan", lastName: "public-jl" };
console.log("greeter:", greeter(user));
