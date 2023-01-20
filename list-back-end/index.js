const express = require("express");
const { v4: uuidv4 } = require('uuid');
const  cors  = require('cors') 
const app = express()


app.use(express.json())
app.use(cors())
const port = 3001

const users = []

app.get('/users', (request, response) =>{

    return response.status(200).json(users)
})

app.post('/users', (request , response) => {

    const { name , age } = request.body

    const user = {id: uuidv4() , name , age}

    users.push(user)
    return response.status(201).json(user)
})

app.put('/users/:id' , (request, response) => {
    const {id} = request.params
    const { name , age } = request.body

    const index = users.findIndex( item => id === item.id)  
    if(index === -1){
        return response.status(404).json('User not found')
    }

    users[index] = { id, name, age }
    
    return response.status(204).json()

})

app.delete('/users/:id' , (request, response) => {
    const {id} = request.params
    console.log(id)

    const index = users.findIndex( item => id === item.id)  

    if(index < 0){
        return response.status(404).json('User not found')
    }

    users.splice(index,1)

    return response.status(204).json()

})


app.listen(port, () =>{
    console.log(`Server started on port ${port}`)
})