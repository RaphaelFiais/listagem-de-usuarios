import { useState, useEffect } from 'react'
import { Container, Div, BoxList, Image, Button, H1, ListItem, Trash,  } from './style'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



  function Users() {
    
    const [user, setUser] = useState([])
    const history = useHistory()

async function Click() {
  history.push('/')
}


useEffect(() =>{
    async function fatchUser(){
      const {data: newUser} = await axios.get('http://localhost:3001/users')

      setUser(newUser)
    }
    fatchUser()
},[])



async function Delete(id){
  console.log(id)
  await axios.delete(`http://localhost:3001/users/${id}`)

  const newList = user.filter( item => item.id !== id)
    setUser(newList)

}


  return (
    <Container>
      <Div>
        <Image src="./src/assets/User-Profile_Monochromatic2.svg" alt="" />
          <BoxList>
            <H1>Usuários</H1> 

            <ul>
            {
              user.length > 0 ? (
                user.map(item => (
                  <ListItem key={item.id}>
                    <p>{item.name} - {item.age}</p>
                    <Trash onClick={() => Delete(item.id)}/>
                  </ListItem>
                ))) : (<h2>Não há usuários registrados.</h2>)
              }
            </ul>

            <Button onClick={Click}><img src="./src/assets/Arrow-left.png"/> Voltar</Button>
          </BoxList>
      </Div>
    </Container>
  )
}

export default Users
