
    // 1과2
    // function fetchUser(){
    // 3. async 
    async function fetchUser(){
    // return new Promise((resolve, reject)=>{
        // 1. pending
        // return 'John'
        // 2. fullfilled
        // resolve('John')
        // 3. async     
        return 'John'
    
}

const user = fetchUser();
// 3. async 
user.then(console.log);
console.log(user);