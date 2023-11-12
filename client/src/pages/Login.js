import React, {useState} from 'react'
import {companyService} from '../services/company';
import { vendorService } from '../services/vendor';
import {useNavigate} from 'react-router-dom';



function Login() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
  
      // Try loginService
      try {
        response = await companyService.signIn(formData.email, formData.password);
        navigate('/company');
      } catch (loginError) {
        // If loginService fails, try signInService
        response = await vendorService.signIn(formData.email, formData.password);
        navigate('/vendor');
      }
      const accessToken = response.accessToken;
  

      sessionStorage.setItem('token', accessToken);
  
      alert('Login berhasil!');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  

  return (
    
    <div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <h2 class="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
    <form onSubmit={handleSubmit}>
      <div class="mb-4">
        <label class="block mb-1" for="email">Email-Address</label>
        <input id="email" type="text" name="email" value={formData.email} onChange={handleInputChange} class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1" for="password">Password</label>
        <input id="password" type="password" name="password" value={formData.password} onChange={handleInputChange} class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" type="checkbox" class="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
          <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
        </div>
        <a href="#" class="text-sm"> Forgot your password? </a>
      </div>
      <div class="mt-6">
        <button class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button>
      </div>
      <div class="mt-6 text-center">
        <a href="#" class="underline">Sign up for an account</a>
      </div>
    </form>
  </div>
</div>
  )
}

export default Login