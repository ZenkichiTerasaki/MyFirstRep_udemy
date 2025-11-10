import axios from 'axios';

//NestJSサーバのURL
const api = axios.create({
    baseURL:'http://localhost:3000',
});

export interface Items{
    id: string;
    name: string;
    price: number;
    description?: string;
    status: string;
		createdAt: string;
		updatedAt: string;
		userId: string;
}

// アイテム一覧を取得
export const getAllItems = async (): Promise<Items[]> => {
  const res = await api.get<Items[]>('/items');
  return res.data;
};