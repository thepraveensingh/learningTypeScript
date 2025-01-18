"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "praveen",
    email: "p@pmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "praveen", isPaid: false, email: "p@p.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUsers(user) {
    return { name: "", email: "", isActive: false };
}
createUsers({ name: "", email: "", isActive: false });
var myUser = {
    id: "1234",
    name: "orav",
    email: "p@p.com",
    isActive: false
};
myUser.email = "ps@p.com";
