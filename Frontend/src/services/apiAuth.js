import axios from "axios";

export async function signin({ email, password, confirmPassword, name }) {
  await axios({
    method: "POST",
    url: "http://127.0.0.1:8000/api/v1/users/signup",
    data: {
      email,
      password,
      confirmPassword,
      name,
    },
  });
}
