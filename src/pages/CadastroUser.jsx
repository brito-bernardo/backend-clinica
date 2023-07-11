import React, { useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

export default function CadastroUser() {
  const [formData, setFormData] = useState({
    user: {
      username: '',
      password: '',
      email: '',

    },
    role: '',
  });

  function selectUser(data) {
    if (formData.role === 'paciente') {
      return createUserPaciente();
    } else if (formData.role === 'medico') {
      return createUserMedico();
    } else if (formData.role === 'recepcionista') {
      return createUserRecepcionista();
    }
  }

  async function createUserPaciente() {
    try {
      const { data } = await api.post('main/pacientes/', formData);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function createUserMedico() {
    try {
      const { data } = await api.post('main/cadastro-medico/', formData);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function createUserRecepcionista() {
    try {
      const { data } = await api.post('main/cadastro-recepcionista/', formData);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      user: {
        ...prevFormData.user,
        [name]: value,
      },
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    selectUser();
  }

  return (
    <div className="flex bg-white h-screen ml-64 mt-16">
      <div className='m-6'>
        <h1 className="text-[44px] text-[#274C52]">Cadastro de usuário</h1>
        <form className="m-6" onSubmit={handleSubmit}>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-6">
              <label htmlFor="username" className="block text-md font-medium leading-6 text-gray-900">
                Nome de usuário
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.user.username}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 text-md"
                />
              </div>
            </div>

            <div className="col-span-3">
              <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-900">
                Senha
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.user.password}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 text-md"
                />
              </div>
            </div>

            <div className="col-span-3">
              <label htmlFor="role" className="block text-md font-medium leading-6 text-gray-900">
                Tipo de usuário
              </label>
              <div className="mt-2">
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 text-md"
                >
                  <option value="" disabled hidden>
                    Selecione
                  </option>
                  <option value="paciente">Paciente</option>
                  <option value="medico">Médico</option>
                  <option value="recepcionista">Recepcionista</option>
                </select>
              </div>
            </div>

            <div className="col-span-6">
              <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.user.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link to = '/'>
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancelar
              </button>
            </Link>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
