const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
      let error = false
       if(!error){
       resolve({username: 'safa', pass: 123})  
    }else{
        reject('ERROR')
    }
    },1000)
    
})

promise.then(function(user){
    console.log(user);
    return user.username
    
}).then((username)=>{
   console.log(username);
   
}).catch((error)=>{
    console.log(error)
}).finally(()=> console.log('Promise is either resolved or rejected'))


const promiseTwo = new Promise(function (resolve, reject){
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:'js'})
        }else{
            reject('ERROR:Something went wrong!')
        }
    },1000)
});

async function consumePromiseTwo() {
    try {
        const response = await promiseTwo
        console.log(response);
    } catch (error) {
       console.log(error);
        
    }
    
}

consumePromiseTwo()


async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('error')
    }
    
}
getUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
   return response.json();
}).then((response)=>{
    console.log(response);
})
.catch((error)=>console.log('ERROR'));