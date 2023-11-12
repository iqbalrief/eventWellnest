
import React, { useState } from 'react'
import { eventService } from '../../services/event';
import {useNavigate} from 'react-router-dom';


function NewEvent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    eventName: '',
    proposeDate1: '',
    proposeDate2: '',
    proposeDate3: '',
    companyId: '',
    vendorId: '', 
    status: '',
    remark: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/company');
    
    try {
      // Call the createEvent function from the eventService
      const response = await eventService.createEvent(
        formData.eventName,
        formData.proposeDate1,
        formData.proposeDate2,
        formData.proposeDate3,
        formData.companyId,
        formData.vendorId,
        formData.status,
        formData.remark
      );
      console.log('Event created successfully:', response);
      alert('Create Event Successfully');
    } catch (error) {
      console.error('Failed to create event:', error)
    }
  };

  
  return (
    <div class="flex items-center justify-center p-12">
  
    <div class="mx-auto w-full max-w-[550px]">
      <form onSubmit={handleSubmit}>
        <div class="mb-5">
          <label
            for="eventName"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Event Name
          </label>
          <input
            type="text"
            name="eventName"
            id="eventName"
            placeholder="Event Name"
            value={formData.eventName}
            onChange={handleChange}
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="proposeDate1"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Propose Date 1
          </label>
          <input
            type="date"
            name="proposeDate1"
            id="proposedate1"
            placeholder="Propose Date"
            value={formData.proposeDate1}
            onChange={handleChange}
            
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="proposeDate2"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Propose Date 2
          </label>
          <input
            type="date"
            name="proposeDate2"
            id="proposeDate2"
            placeholder="Propose Date 2"
            value={formData.proposeDate2}
            onChange={handleChange}
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="proposeDate"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Propose Date 3
          </label>
          <input
            type="date"
            name="proposeDate3"
            id="proposeDate3"
            placeholder="Propose Date 3"
            value={formData.proposeDate3}
            onChange={handleChange}
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
         <div class="mb-5">
          <label
            for="companyId"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Company Name
          </label>
          <input
            type="text"
            name="companyId"
            id="companyId"
            placeholder="Propose Date 3"
            value={formData.companyId}
            onChange={handleChange}
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="vendorId"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Vendor Name
          </label>
          <input
            type="text"
            name="vendorId"
            id="vendor"
            placeholder="Vendor Name"
            value={formData.vendorId}
            onChange={handleChange}
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="status"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Status
          </label>
          <input
            type="text"
            name="status"
            id="status"
            value={formData.status}
            onChange={handleChange}
            placeholder="Enter your subject"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="remark"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Remark
          </label>
          <textarea
            rows="4"
            name="remark"
            id="remark"
            placeholder="Type your message"
            value={formData.remark}
            onChange={handleChange}
            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>
        <div>
          <button
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default NewEvent
