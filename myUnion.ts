let score: number | string | boolean = 33
score = false
score = "erfg"

type User = {
  name : string ,
  id : number
}
type Admin = {
  username : string ,
  id : number
}
let praveen : User | Admin = {name: "singh" , id: 335}
praveen = { username : "dfgf" , id : 34}

function getDbId(id : number | string){
  console.log(`DB id is : ${id}`);
  // id.toUpperCase()--> wrong id is of type that is combo of number and string
}
getDbId(3)
getDbId("45")


const data : number[] = [1,2,4]
const dat2a : string[] = ["ert","ertgt","sxcf"]
const data3 : (string | number)[] = [1,3,"dfb"]
const data4 : any[] = [1,3,"dfb",true]

let pi : 3.14 = 3.14
let seatAllot : "aisle" | "middle" | "window"
seatAllot = "aisle"
// seatAllot = "gj"--> wrong
