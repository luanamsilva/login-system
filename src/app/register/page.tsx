import LoginCard from '../../components/LoginCard';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main>
      <LoginCard
        title="Faça seu cadastro para ter acesso"
        label="Nome do usuário:"
      >
        <Input
          className="pl-2 rounded-md focus:outline-blue-400"
          type="text"
          placeholder="Digite seu nome"
        />
        <Input
          className="pl-2 rounded-md focus:outline-blue-400"
          type="email"
          placeholder="Digite seu e-mail"
        />
        <Input
          className="pl-2 rounded-md focus:outline-blue-400"
          type="passord"
          placeholder="Digites sua senha"
        />
        <Button>Cadastrar</Button>
        <Link className="text-gray-300" href="/login">
          Clique aqui se já possui uma conta
        </Link>
      </LoginCard>
    </main>
  );
}
