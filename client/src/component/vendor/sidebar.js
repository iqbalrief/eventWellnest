import React from 'react'
import { NavLink } from 'react-router-dom'


function sidebar() {
  return (
 
    <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
            <div class="-mx-6 px-6 py-4">
                <a href="#" title="home">
                    <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" class="w-40" alt="POC WCS"/>
                </a>
            </div>
            <ul class="space-y-2 tracking-wide mt-8">
                <li>
                    <NavLink to="/vendor" aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                    <span class="group-hover:text-gray-700">Vendor</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/approve" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                    
                       <span class="group-hover:text-gray-700">Approve</span>
                    </NavLink>
                </li>
                <li>
                    <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                        <svg class="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2"stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                        <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="16 3 20 7 16 11" />  
                        <line x1="10" y1="7" x2="20" y2="7" />  <polyline points="8 13 4 17 8 21" />  <line x1="4" y1="17" x2="13" y2="17" /></svg>
                        <span class="group-hover:text-gray-700">Transacciones</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                        <svg class="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                        <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="7" r="4" />  
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                        <span class="group-hover:text-gray-700">Mi cuenta</span>
                    </a>
                </li>
            </ul>
        </div>
    
        <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
            <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                <svg class="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  
                <path d="M20 12h-13l3 -3m0 6l-3 -3" /></svg>
                <span class="group-hover:text-gray-700">Cerrar sesión</span>
            </button>
        </div>
    </aside>
  )
}

export default sidebar
