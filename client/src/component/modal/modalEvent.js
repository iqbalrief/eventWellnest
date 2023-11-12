import React, { useState, useEffect } from 'react';
import { eventService } from '../../services/event';

function ModalEvent({ isOpen, closeModal, eventId }) {
  const [eventData, setEventData] = useState(null);
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

  useEffect(() => {
    const fetchEventById = async () => {
      try {
        const data = await eventService.getEventById(eventId);
        setEventData(data);
        setFormData({
          eventName: data.dataEvent.eventName,
          proposeDate1: data.dataEvent.proposeDate1,
          proposeDate2: data.dataEvent.proposeDate2,
          proposeDate3: data.dataEvent.proposeDate3,
          companyId: data.dataEvent.companyId,
          vendorId: data.dataEvent.vendorId,
          status: data.dataEvent.status,
          remark: data.dataEvent.remark,
        });
      } catch (error) {
        console.error('Failed to fetch event details:', error);
      }
    };

    // Panggil fungsi fetchEventById jika eventId tersedia dan modal terbuka
    if (eventId && isOpen) {
      fetchEventById();
    }
  }, [eventId, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await eventService.updateEvent(eventId, formData);
      console.log('Event updated successfully!');
      closeModal();
    } catch (error) {
      console.error('Failed to save event changes:', error);
    }
  };

  if (!isOpen || !eventData) {
    return null; // Tidak menampilkan modal jika isOpen adalah false atau data acara tidak tersedia
  }

  return (
    <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
      <div role="alert" className="container mx-auto w-11/12 md:w-10/10 max-w-lg">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
        <label
            htmlFor="eventName"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Event Name
          </label>
          <input
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="eventName"
          />
           <label
            htmlFor="proposeDate1"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Propose Date1
          </label>
          <input
            id="proposeDate1"
            name="proposeDate1"
            value={formData.proposeDate1}
            onChange={handleChange}
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="James"
          />

           <label
            htmlFor="proposeDate2"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            propose Date 2
          </label>
          <input
            id="proposeDate2"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="James"
          />
          
          <label
            htmlFor="proposeDate3"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            propose Date 3
          </label>
          <input
            id="proposeDate3"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="Propose Date 3"
          />

            <label
            htmlFor="companyId"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Company
          </label>
          <input
            id="compayId"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="Company"
          />

<label
            htmlFor="vendorId"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Vendor
          </label>
          <input
            id="vendor Id"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="Vendor"
          />

<label
            htmlFor="status"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            status
          </label>
          <input
            id="status"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="Status"
          />

<label
            htmlFor="remark"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            remark
          </label>
          <input
            id="remark"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            placeholder="remark"
          />
           <button onclick={handleSave} 
           className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
              Submit
            </button>
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              onclick="modalHandler()"
            >
              Cancel
            </button>
          <button
            onClick={closeModal}
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            aria-label="close modal"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalEvent;
