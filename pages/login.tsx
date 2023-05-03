import ContainerComponent from "../components/Container/Container";
import BoxComponent from "../components/Box/Box";
import { FORM_PADDING, FORM_SPACING } from "../utils/constants";
import TextComponent from "../components/Text/Text";
import { useForm } from "react-hook-form";
import Form from "../components/FormComponents/Form/Form";
import useApi from "../services/useApi";
import { convertDate } from "../utils/helpers";
import TextSeparator from "../components/Details/TextSeparator";

const LoginPage = () => {
  const { postApi } = useApi();

  return (
    <ContainerComponent>
      <LoginForm action={postApi} />
      <InfoMessage />
    </ContainerComponent>
  );
};

const LoginForm = ({ action = (data: any) => {} }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const handleControlledInput = async (value: any, inputName: string) => {
    setValue(inputName, value);
    await trigger(inputName);
  };

  return (
    <BoxComponent
      align="center"
      padding={FORM_PADDING}
      spacing={FORM_SPACING}
      border
    >
      <TextComponent.mediumTitle>Cadastre-se</TextComponent.mediumTitle>
      <TextComponent.paragraph size={14}>
        Para começar, insira os dados abaixo:
      </TextComponent.paragraph>
      <Form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          action(data);
        })}
      >
        <Form.input
          name="firstName"
          bind={register("firstName", { required: "Required" })}
          placeholder="Nome"
          errors={errors}
        />

        <Form.input
          name="lastName"
          bind={register("lastName", { required: "Required" })}
          placeholder="Sobrenome"
          errors={errors}
        />
        <Form.input
          name="email"
          bind={register("email", { required: "Required" })}
          placeholder="E-mail"
          errors={errors}
        />
        <Form.date
          name="dateOfBirthday"
          control={control}
          placeholder="Data de nascimento"
          errors={errors}
          onChange={(value: string) =>
            handleControlledInput( convertDate(value), "dateOfBirthday")
          }
        />
        <Form.input
          name="password"
          bind={register("password", { required: 'Required' })}
          placeholder="Senha"
          password={true}
          errors={errors}
        />
        <Form.select
          inputName="country"
          onChange={(value: string) => handleControlledInput(value, 'country')}
          control={control}
          errors={errors}
        />
        <Form.txtarea
          name="bio"
          bind={register("bio", { required: 'Required' })}
          placeholder="Bio"
          errors={errors}
        />
        <Form.button type="submit" text="Cadastrar" disabled={!isValid} />
        <Form.check
          bind={register("receiveNotifications")}
          text="Desejo receber notificações"
          size={14}
        />
      </Form>
    </BoxComponent>
  );
};

const InfoMessage = () => {
  return (
    <BoxComponent>
      <TextComponent.title>Teste Técnico</TextComponent.title>
      <TextSeparator />
      <TextComponent.paragraph>
        <TextComponent.phrase size={14}>
          Controle suas contas nacionais
        </TextComponent.phrase>
        <TextComponent.phrase size={14}>
          e internacionais em um único lugar!
        </TextComponent.phrase>
      </TextComponent.paragraph>
    </BoxComponent>
  );
};

export default LoginPage;
