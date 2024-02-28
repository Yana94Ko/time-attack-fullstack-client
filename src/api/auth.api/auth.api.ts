import { coreClient } from "../index.api";
import { emailPasswordDto } from "./auth.dto";

export async function signUp(dto: emailPasswordDto) {
  const url = "/accounts/users/sign-up";
  await coreClient.post(url, dto);
}
export async function logIn(dto: emailPasswordDto) {
  const url = "/accounts/users/log-in";
  await coreClient.post(url, dto);
}
export async function logOut() {
  const url = "/accounts/users/log-out";
  await coreClient.delete(url);
}
export async function refreshToken() {
  const url = "/accounts/users/refresh-token";
  const response = await coreClient.post(url);
  console.log("response", response);
  const isLoggedIn = response.data.result;
  console.log(isLoggedIn);
  return isLoggedIn;
}

const authAPI = { signUp, logIn, logOut, refreshToken };

export default authAPI;
