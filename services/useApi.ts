import axios from "axios";
import { useRouter } from "next/router";
import { RegisterUserProps } from "../shared/interfaces";

const useApi = () => {
    const baseURL = 'https://637f50932f8f56e28e87af4a.mockapi.io'
    const router = useRouter()


  const getApi = async (id: string | string[] | undefined) => {
    
    return await axios.get(
      `${baseURL}/challenge/${id}`
    );
  };

  const postApi = async (payload: RegisterUserProps) => {
    console.log(payload);
    
    const request = await axios.post(
        `${baseURL}/challenge`,
        payload
    );

    console.log(request);

    if (request.status === 201) {
      router.push({pathname: '/dashboard', query: {id: request.data.id}})
    }
  };

  return { getApi, postApi };
};

export default useApi;
