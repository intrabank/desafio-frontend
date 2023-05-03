import { useRouter } from "next/router";
import useApi from "../services/useApi";
import { useEffect, useState } from "react";
import ContainerComponent from "../components/Container/Container";
import TextComponent from "../components/Text/Text";
import Box from "../components/Box/Box";
import TextSeparator from "../components/Details/TextSeparator";

const monthNames: string[] = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const Dashboard = () => {
  const routes = useRouter();
  const { getApi } = useApi();
  const [user, setUser] = useState<any>();

  const fetchData = async () => {
    const request = await getApi(routes.query.id);
    setUser(request.data);
  };

  useEffect(() => {
    setUser(fetchData);
    console.log(user);
  }, []);

  const day = new Date(user?.dateOfBirthday).getDate() || "";
  const month = new Date(user?.dateOfBirthday).getMonth() || -1;
  const year = new Date(user?.dateOfBirthday).getFullYear() || "";

  return (
    <ContainerComponent>
      <Box padding="106px" align="center" border>
        <TextComponent.title>Bem Vindo {user?.firstName}</TextComponent.title>
        <TextSeparator />
        <TextComponent.paragraph>
          Você nasceu no dia {day} de {monthNames[month]} de {year}.{" "}
        </TextComponent.paragraph>
      </Box>
    </ContainerComponent>
  );
};

export default Dashboard;
