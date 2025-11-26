import axios from 'axios';

//NestJSサーバのURL
const api = axios.create({
    baseURL:'http://localhost:3000/auth',
});

export interface CreateUser{
    name:string;
    email:string;
    password:string;
    status:string;
}

export interface loginData{
    email:string;
    password:string;
}

export interface User{
    id: string;
    name: string;
    email: string;
    password: string;
    status: string;
		createdAt: string;
		updatedAt: string;
}

//サインアップ
export const postSignup = async (createUser:CreateUser): Promise<User> => {
  const res = await api.post<User>(`/signup`, createUser);
  return res.data;
};

//サインイン
export const postSignin = async (data:loginData): Promise<String> => {
  const res = await api.post<String>(`/signin`, data);
  return res.data;
};
