import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

export default function Forgotpassword() {
  return (
    <div className='grid grid-cols-2 gap-4'>
        <div className='flex justify-center items-center bg-cyan-700'>
            <img src={Logo} className='h-96 w-100' alt='Logo'/>
        </div>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <div className='close_div flex justify-between items-center relative w-full'>
                <h1 className="text-3xl font-semibold text-center text-cyan-700 underline">
                Esqueceu sua senha?
                </h1>
                <Link to="/login">
                    <CloseIcon className='w-8 h-8 ml-auto'/>
                </Link>
                </div>
                <form className="mt-6">
                    <div className="mb-2">
                        <p>Digite aqui seu email, por motivos de segurança, iremos enviar sua senha para o email digitado, caso haja algum cadastro com ele</p>
                        <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-800"
                        >
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cyan-700 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-700">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
      </div>

    </div>
  )
}
