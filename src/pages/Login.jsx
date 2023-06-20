import React, { useState } from 'react';
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import EyeIcon from '@mui/icons-material/Visibility';
import EyeOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const [passValue, setPassValue] = useState({ password: '', showPassword: false });
  const [email, setEmail] = useState('');

  const handlePasswordChange = (prop) => (event) => {
    setPassValue({ ...passValue, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPassValue({ ...passValue, password: passValue.password });
    alert(`Email: ${email}, Password: ${passValue.password}`);
    
  }
  
  const handleClickShowPassword = () => {
    setPassValue({ ...passValue, showPassword: !passValue.showPassword });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className='flex justify-center items-center bg-cyan-700'>
        <img src={Logo} className='h-96 w-100' alt='Logo'/>
      </div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-cyan-700 underline">
            Login
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2 relative">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Senha
              </label>
              <div className='eye_div relative w-full'>
                <input
                  type={passValue.showPassword ? 'text' : 'password'}
                  id="password"
                  className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40 relative"
                  onChange={handlePasswordChange('password')}
                  value={passValue.password}
                />
                <div className="icon_button absolute right-4 top-3.5" onClick={handleClickShowPassword}>
                  {passValue.showPassword ? (
                    <EyeIcon className="h-6 font-extralight" />
                  ) : (
                    <EyeOffIcon className="h-6 font-extralight" />
                  )}
                </div>
              </div>
            </div>
            <Link
              to="/forgotpassword"
              className="text-xs text-black hover:underline"
            >
              Esqueceu sua senha?
            </Link>
            <div className="mt-6">
              <Link to="/">
                <button 
                type='submit'
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cyan-700 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600">
                  Entrar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
                  }  