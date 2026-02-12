import { getApi, putApi } from '../../services/axios.service';

export const updateUser = async (data: any) => await putApi('/users/', data);
export const checkUsernameExists = async (username: string) =>
  await getApi(`/users/exists/username/${username}`);
