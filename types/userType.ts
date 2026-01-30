export interface IUser {
  id?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  otp?: string;
}

export interface IRegisterResponse {
  message: string;
  user: IUser;
}

export interface ILoginResponse {
  message: string;
  token: string;
}
