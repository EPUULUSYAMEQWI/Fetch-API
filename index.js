let fetch = require("node-fetch");
const { title } = require("process");
fetch('https://jsonplaceholder.typicode.com/todos',{
    method: 'POST',
    headers: {
        "content-type": "application/json"
    },
    body:JSON.stringify({
        userId: 5,
        title:"Hopper Lab",
        completed: true
    })
})
.then(function (response) {
return response.json();
})
.then(function (data) {
console.log('success', data);
})
.catch(function (error) {
console.log('error', error);
})