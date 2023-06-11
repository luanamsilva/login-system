import LoginCard from '../components/LoginCard'
import Input from '../components/Input'
import Button from '../components/Button'
import Link from 'next/link'



export default function App() {


  
  return (
    <main>

<LoginCard title='Para ter acesso ao conteúdo informe seus dados de acesso' label='Login:'>
<Input className="pl-2 bg-gray-100 rounded-md focus:outline-blue-400" type="email" placeholder="Digite seu e-mail"/>
<Input  className="pl-2 rounded-md focus:outline-blue-400" type="passord" placeholder="Digite sua senha"/>
<Button >Enviar</Button>
<Link className="text-gray-300" href='/register'>Ainda não possui cadastro?</Link>
  </LoginCard>
    </main>
  )
}
