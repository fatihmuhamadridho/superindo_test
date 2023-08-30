import { userModelProps } from "../../server/models/user.model";

const userMock: userModelProps[] = [
  {
    id: "1",
    username: "superadmin",
    password: "superadmin",
    role: "administrator",
    token: "abc1",
  },
  {
    id: "2",
    username: "customer",
    password: "customer",
    role: "customer",
    token: "abc2",
  },
];

export default userMock;
