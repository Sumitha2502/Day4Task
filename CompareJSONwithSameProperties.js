let details1={
    name:"Sumitha",
    email:"sumi123@gmail.com",
    mbl:"7354223653",
    age:"26",
    gender:"female"
    }

let details2={
    name:"Sumitha",
    age:"26",
    email:"sumi123@gmail.com",
    gender:"female",
    mbl:"7354223653"
}

let flag=true;

for(let e in details1)
{
    if(details1[e] !== details2[e])
    {
        flag= false
        break
    }
}
flag?console.log("Equal"):console.log("Not Equal")


