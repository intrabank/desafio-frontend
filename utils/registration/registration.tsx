import axios from "axios"

export interface FormData {
  firstName: string,
  lastName: string,
  email: string,
  birthday: string,
  password: string,
  country: string,
  bio: string,
  receiveNotifications: boolean,
}

export const registerUser = async (inputs: FormData) => {
  const res = await axios.post("https://637f50932f8f56e28e87af4a.mockapi.io/challenge", inputs)
  return res
}