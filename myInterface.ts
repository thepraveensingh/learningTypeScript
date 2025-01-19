interface User3 {
  email : string,
  uId : Number,
  gId ?: string
  readonly dbid : number,
  // func1 : () => string
  func1(): string,
  getCoupon(couponName: string, val:number):number

}
//reopening of interfacew
interface User3 {
  githubToken : string
}

interface Admin2 extends User3 {
  role : "admin " | "ta" | "learner"
}


//loose form of class
const paru : Admin2 = {dbid : 3 , email : "p@p.com", uId : 2211, func1 :()=>{return "func1 started"}, getCoupon:(cname: "pra", offVal: 50)=>{return 10}, githubToken : "234" , role : "admin " }

paru.email = " h@jv.com"


//what makes interface intersting, definition of users
