
import api from './api';

export const eventService = {
  getAllEvent: async () => {
    try {
      const response = await api.get('event');

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  createEvent: async (eventName, proposeDate1, proposeDate2, proposeDate3, companyId, vendorId, status, remark) => {
    try {
      const response = await api.post('event/create-event', {
        eventName: eventName,
        proposeDate1: proposeDate1,
        proposeDate2: proposeDate2,
        proposeDate3: proposeDate3,
        companyId: companyId,
        vendorId: vendorId,
        status: status,
        remark: remark
      });
      return response.data; 
    } catch (error) {
      throw error; 
    }
  },
  getEventById: async (eventId) => {
    try {
      const response = await api.get(`event/${eventId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  updateEvent: async (eventId, updatedData) => {
    try {
      const response = await api.put(`event/${eventId}`, updatedData);
      console.log('Update response:', response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};






