import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';


export default function Prontuario() {

  const [formData, setFormData] = useState({
    paciente: '',
    birthday: '',
    sex: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    description: '',
    allergies: ''
  });

  const [allPacientes, setAllPacientes] = useState([]);

  useEffect(() => {
    getPacientes();
  }, []);
  async function getPacientes() {
      try {
        const { data } = await api.get('main/pacientes/');
        let pacientes = data;
        setAllPacientes(pacientes);
      } catch (error) {}
    }

  async function createProntuarios() {
    try {
      const { data } = await api.post('main/prontuario/', formData );

      console.log(data); 

    } catch (error) {
      console.error(error); 
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    createProntuarios();
  }


  return (
    <div className="flex bg-white ml-64 mt-16 ">  {/* Não mexer em nada dessa div */}
      <form className="m-6 " onSubmit={handleSubmit}> 
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        <h1 className='text-[44px] text-[#274C52]'>Prontuário</h1>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            Preencha aqui o protuário do paciente
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-3">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Nome do paciente
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <select
                    id="paciente"
                    name="paciente"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={formData.paciente}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled hidden>
                      Selecione o paciente
                    </option>
                    {allPacientes.map((paciente, index) => (
                      <option key={paciente.id} value={paciente.id}>
                        {paciente.user.username}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <label htmlFor="born_date" className="block text-sm font-medium leading-6 text-gray-900">
                Data de nascimento
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="date"
                    min="1960-01-01"
                    name="birthday"
                    id="birthday"
                    autoComplete="born_date"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={formData.born_date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Sexo
              </label>
              <div className="mt-2">
                <select
                  id="sex"
                  name="sex"
                  placeholder="Selecione o sexo"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={formData.sex}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected hidden>Selecione o sexo</option>
                  <option value={'F'}>Feminino</option>
                  <option value={'M'}>Masculino</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Endereço
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Cidade
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Estado
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="state"
                  id="state"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.region}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                CEP
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="zip_code"
                  id="zip_code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Descrição
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  value={formData.about}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="allergies" className="block text-sm font-medium leading-6 text-gray-900">
                Alergias
              </label>
              <div className="mt-2">
                <textarea
                  id="allergies"
                  name="allergies"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  value={formData.allergies}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
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
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Salvar
        </button>
      </div>
    </form>
    </div>
  );
}

