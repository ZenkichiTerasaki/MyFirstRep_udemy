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

export interface CreateItem{
  name: string;
  price :number;
  description? :string;
}

// アイテム一覧を取得
export const getAllItems = async (): Promise<Items[]> => {
  const res = await api.get<Items[]>(`/items`);
  return res.data;
};

//id指定してアイテムを検索
export const getFindById = async (id:string): Promise<Items> =>{
  const res = await api.get<Items>(`/items/${id}`);
  return res.data;
};

export const postCreate = async (data:CreateItem): Promise<Items> =>{
  const token = JSON.parse(localStorage.getItem("token")!);

  const res = await api.post<Items>(`/items`, data, {
    headers: {
      Authorization: `Bearer ${token.token}`
    }
  });
  return res.data;
};

export const delete_ = async (id:string): Promise<void> =>{
  const token = JSON.parse(localStorage.getItem("token")!);
  console.log(id);
  const data = '';

  const res = await api.delete<void>(`/items/${id}`, {
    headers: {
      Authorization: `Bearer ${token.token}`
    }
  });
};

export const update_ = async (id:string): Promise<void> =>{
  const token = JSON.parse(localStorage.getItem("token")!);
  console.log(id);
  console.log(token.token);
  const data = '';
  const res = await api.put<void>(`/items/${id}`,data, {
    headers: {
      Authorization: `Bearer ${token.token}`
    }
  });
};



