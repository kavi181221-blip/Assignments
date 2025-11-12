fetch("https://api.github.com/users/<your-username>")
.then(response=>{
    return response.json();
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log("Error fetching data:",error)
})