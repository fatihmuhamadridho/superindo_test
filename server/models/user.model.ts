export interface userModelProps {
  id: string;
  username: string;
  password: string;
  role: "administrator" | "customer";
  token: string;
}
