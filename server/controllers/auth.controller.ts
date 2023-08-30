import userMock from "../../__test__/mock/user.mock";

export interface authLoginProps {
  username: string;
  password: string;
}

export class AuthController {
  static profile(token: string) {
    const response = userMock.find(user => user.token === token);
    if (!response) return undefined;
    return response;
  }

  static login({ username, password }: authLoginProps) {
    const response = userMock.find(
      user => user.username === username && user.password === password
    );
    return response?.token;
  }
}
