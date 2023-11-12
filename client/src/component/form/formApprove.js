import React, {useState} from 'react'
import { approveService } from '../../services/approvalVendor';
import {useNavigate} from 'react-router-dom';


function FormApprove() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    eventId: '', 
    chosenDate: '',
    vendorId: '', 
    status: '',
    reason: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // navigate('/approve');
    
    try {
      // Call the createEvent function from the eventService
      const response = await approveService.createApprove(
        formData.eventId,
        formData.vendorId,
        formData.status,
        formData.chosenDate,
        formData.reason,
      );
      
      console.log('Event created successfully:', response);
    } catch (error) {
      console.error('Failed to create event:', error)
    }
  };
  return (
    <div className="flex items-center justify-center p-12">
 
  <div className="mx-auto w-full max-w-[550px]">
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="vendorId"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Vendor Id
        </label>
        <input
          type="text"
          name="vendorId"
          id="vendorId"
          value={formData.vendorId}
          onChange={handleChange}
          placeholder="Event Id"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="eventId"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Event Id
        </label>
        <input
          type="text"
          name="eventId"
          id="eventId"
          value={formData.eventId}
          onChange={handleChange}
          placeholder="event Id"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="status"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Status
        </label>
        <input
          type="text"
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
          placeholder="status"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
          <label
            for="chosenDate"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Chosen Date
          </label>
          <input
            type="date"
            name="chosenDate"
            id="chosenDate"
            placeholder="Chosen Date"
            value={formData.chosenDate}
            onChange={handleChange}
            
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      <div className="mb-5">
        <label
          htmlFor="reason"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Message
        </label>
        <textarea
          rows={4}
          name="reason"
          id="reason"
          placeholder="Type your message"
          value={formData.reason}
          onChange={handleChange}
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div>
        <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default FormApprove