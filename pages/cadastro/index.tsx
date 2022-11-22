import { NextPage } from "next";

const Register: NextPage = () => {

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      firstName: { value: string };
      lastName: { value: string };
      email: { value: string };
      birthday: { value: Date };
      password: { value: string };
      country: { value: string };
      bio: { value: string };
      receiveNotifications: { checked: boolean };
    }

    console.log(
      `Cadastro realizado com sucesso.
      Nome: ${target.firstName.value}
      Sobrenome: ${target.lastName.value}
      E-mail: ${target.email.value}
      Data de nascimento: ${target.birthday.value}
      Senha: ${target.password.value}
      País: ${target.country.value}
      Bio: ${target.bio.value}
      Recebe notificações? ${target.receiveNotifications.checked}
      
      `)
  }

  return (
    <main>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="firstName">
          Nome
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Nome" />
        </label>
        <br />

        <label htmlFor="lastName">
          Sobrenome
          <input type="text" id="lastName" name="lastName" placeholder="Sobrenome" />

        </label>
        <br />

        <label htmlFor="email">
          E-mail
          <input type="email" id="email" name="email" placeholder="E-mail" />

        </label>
        <br />

        <label htmlFor="birthday">
          Data de nascimento
          <input type="date" id="birthday" name="birthday" placeholder="Data de nascimento" />
        </label>
        <br />

        <label htmlFor="password">
          Senha
          <input type="password" id="password" name="password" placeholder="Senha" />
        </label>
        <br />

        <label htmlFor="countries">
          Selecione seu país
          <select id="countries" name="country">
            <option value="br">Brasil</option>
            <option value="us">Estados Unidos</option>
            <option value="jp">Japão</option>
            <option value="au">Austrália</option>
          </select>
        </label>
        <br />

        <label htmlFor="bio">
          Bio
          <textarea
            name="bio"
            id="bio"
            cols={30}
            rows={5}>
          </textarea>
        </label>
        <br />

        <input type="submit" value="Cadastrar" />

        <label htmlFor="receiveNotifications">
          Desejo receber notificações
          <input type="checkbox" id="receiveNotifications" name="receiveNotifications" />
        </label>

      </form>

    </main>
  )
}

export default Register