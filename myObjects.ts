const User = {
  name : "praveen",
  email : "p@pmail.com",
  isActive : true
}

function createUser({name : string , isPaid : boolean}){
}
let newUser = {name:"praveen",isPaid : false, email : "p@p.com"};
createUser(newUser)

function createCourse():{name : string , price : number}{
  return {name : "reactjs" , price : 399}
}

type User = {
  name: string;
  email:string;
  isActive: boolean;
}


function createUsers(user: User):User{
  return {name:"",email:"",isActive:false}
}

createUsers({name:"",email:"",isActive:false})

type MyUser = {
  readonly id: string
  name: string;
  email:string;
  isActive: boolean;
  credcard? : number
}
let myUser : MyUser = {
   id : "1234",
  name : "orav",
  email : "p@p.com",
  isActive : false
}

myUser.email = "ps@p.com"
// myUser.id = 343


export{}