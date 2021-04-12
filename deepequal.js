
function deepequal(g,j){
    if(typeof g===typeof j){
        return true
    }
    else{
        return false
    }
}

const s=new Object()
s.firstName="bhavya"
s.lastName="Nandikolla"
a=s.firstName
b=s.lastName
console.log(typeof s)

f=null



const arr = [
    'Bhavya','Bhavya', 07,
    function() { console.log('Hey how are you') },
  ]
const g=arr[0]
const j=arr[1]
console.log(deepequal(g,j))
console.log(deepequal(s,f))
