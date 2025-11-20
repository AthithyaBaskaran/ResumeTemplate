import api from "./axiosConfig";

export const registerUser = async (data) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

export const LoginUser = async (data) => {
    try{
        const response = await api.post("/auth/login", data);
        return response.data;
    }
    catch {
        throw error.response?.data || {message:"Something went wrong"};
    }
};
export const getAllUsers = async () => {
    try{
        const response = await api.get("/user/getAllUsers");
        console.log(response.data);
        return response.data;
    }
    catch {
        throw error.response?.data || {message:"Something went wrong"};
    }
};