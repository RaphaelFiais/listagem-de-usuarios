import { useState, useRef } from 'react'
import { Container, Div, BoxList, Image, Input,Span, Label, Button  } from './style'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import H1 from '../../Components/Title'

  function App() {
    
    const [user, setUser] = useState([])
    const inputName = useRef()
    const inputAge = useRef()
    const history = useHistory()

    

async function Click() {
  if(inputName.current.value !== '' && inputAge.current.value > 0){
  const { data: newUser } = await axios.post('http://localhost:3001/users',{
    name: inputName.current.value, 
    age: inputAge.current.value
  })
  setUser([...user, newUser])


  history.push('/usuarios')
}
  else(alert('Digite um nome e uma idade'))
}


  return (
    <Container>
      <Div>
        <Image src="./src/assets/Consulting_Isometric1.svg" alt="" />
          <BoxList>
            <H1>Olá</H1>
            <Label htmlFor="">
              <Span>Nome</Span>
              <Input type="text" ref={inputName} placeholder='Digite seu nome' />
            </Label>
            <Label htmlFor="">
              <Span>Idade</Span>
              <Input type="number" ref={inputAge} placeholder='Digite sua idade' />
            </Label>
            <Button onClick={Click}>Cadastrar<img src="./src/assets/Arrow-left.png"/></Button>
          </BoxList>
      </Div>
    </Container>
  )
}

export default App
