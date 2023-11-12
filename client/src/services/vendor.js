
import api from './api';

export const vendorService = {
    signIn: async (email, password) => {
      try {
        const response = await api.post('vendor/signIn', {
          email: email,
          password: password,
        });
        return response.data; 
      } catch (error) {
        throw error; 
      }
    },
    getAllVendor: async () => {
      try {
        const response = await api.get('vendor');
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    getVendorById: async (id) => {
      try {
          const response = await api.get(`vendor/${id}`);
          return response.data;
      } catch (error) {
          throw error;
      }
  },
};




