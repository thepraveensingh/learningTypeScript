function add2(num : number): number{
  return num + 2;
  // return "hello"-->not allowed as return type is a number

}

function getU(val:string){
  return val.toUpperCase();
}

function signUpUser(name: string, email: string ,paidornot: boolean){

}

let loginUser = (name : string, email : string, isPaid: boolean = false) => {

}
add2(3)
getU("4ef")
signUpUser("praveen","prav@gmail.com",true)
loginUser("p","p@gmail.com")



////////////////////////////////////////

function getVal(myval : number){
  if(myval > 5){
    return true
  }
  return "200 Ok"
}

const getHello = (s: string) :string => {
  return ""
}

const heros = ["thor","spid","iron"]
heros.map((hero):string => {
  return `hero is ${hero}`
})

function consoleError(errM: string):void{
  console.log(errM);
}
function handleError(errM: string):never {
  throw new Error(errM)
}


export{}