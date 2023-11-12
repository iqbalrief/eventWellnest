
import api from './api';

export const approveService = {
    getAllApprove: async () => {
      try {
        const response = await api.get('approve');
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    createApprove: async (eventId, vendorId, status, reason, chosenDate) => {
      try {
        // const chosenDate = proposeDate1 || proposeDate2 || proposeDate3;
        const response = await api.post('approve', {
          
          vendorId: vendorId,
          eventId: eventId,
          status: status,
          reason: reason,
          chosenDate: chosenDate
          
        });
        console.log('Response:', response);
        return response.data; 
      } catch (error) {
        // throw error; 
        console.error('Error:', error.response);
      }
    },
  };




