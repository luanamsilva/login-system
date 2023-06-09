import LoginCard from '../../components/LoginCard'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <main>

<LoginCard  title='Faça seu cadastro para ter acesso' label='Nome do usuário:'>

<Input type="text" placeholder="Digite seu nome"/>
<Input type="email" placeholder="Digite seu e-mail"/>
<Input type="passord" placeholder="Digites sua senha"/>
<Button>Cadastrar</Button>
<Link href='/login'>Já possui uma conta?</Link>
</LoginCard>
    </main>
  )
}