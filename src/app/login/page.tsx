import LoginCard from '../../components/LoginCard'
import Input from '../../components/Input'
export default function LoginPage() {
  return (
    <main>

<LoginCard title='Entre com seu usuário e sua senha' label='Login:'>
<Input type="email" placeholder="Digite seu e-mail"/>
<Input type="passord" placeholder="Digites sua senha"/>
  </LoginCard>
    </main>
  )
}