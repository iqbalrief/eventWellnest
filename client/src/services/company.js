
import api from './api';

export const companyService = {
  signIn: async (email, password) => {
    try {
      const response = await api.post('company/signIn', {
        email: email,
        password: password,
      });
      return response.data; 
    } catch (error) {
      throw error; 
    }
  },
  getAllCompanies: async () => {
    try {
      const response = await api.get('company');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};






