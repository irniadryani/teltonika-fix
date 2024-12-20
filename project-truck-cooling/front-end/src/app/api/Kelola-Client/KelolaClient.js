import { Api } from "../../common/api";

export const kelolaClientFn = async ({ page, search }) => {
	const response = await Api.get(`/clients?page=${page}&search=${search}`)
	return response.data
}

export const insertClientFn = async (data) => {
  const response = await Api.post("/clients", data);
  return response.data;
};

export const singleClientFn = async (id) => {
  const response = await Api.get(`/clients/${id}`);
  return response.data;
};

// export const updateClientFn = async (id, data) => {
//   const response = await Api.put(`/clients/${id}`, data);
//   return response.data;
// };

export const updateClientFn = async (id, data) => {
  try {
    const response = await Api.put(`/clients/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("API error:", error); // Log the full error for debugging
    throw error; // Throw error to trigger onError in the mutation
  }
};

export const suspendFn = async (id, data) => {
  const response = await Api.put(`/clients/${id}/suspend`, data); 
  return response.data;
};
  
export const restoreFn = async (id, data) => {
  const response = await Api.put(`/clients/${id}/restore`, data);  
  return response.data;
};

export const resetPasswordFn = async (id, data) => {
  const response = await Api.put(`/clients/${id}/reset-password`, data);  
  return response.data;
};


