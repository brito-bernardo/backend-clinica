import React from 'react'
import {
    Avatar,
  } from "@material-tailwind/react";
import BernardoIcon from '../assets/BernardoIcon.jpg'

const profile = [
    {
      nome: 'Bernardo Brito',
      email: 'bernardo.brito@gmail.com',
      tipo: 'Admin',
    },
    // Resto das pessoas...
  ];

export default function Perfil() {
  return (
    <div className="flex flex-col bg-white ml-64 mt-16">
    <h1 className='ml-6 mt-6 text-[44px] text-[#274C52]'>Meu perfil</h1>
    <div className="m-6">
        <p className="mb-5 text-sm font-semibold leading-6 text-gray-900" >Foto:</p>
        <Avatar
            variant="circular"
            alt="candice wu"
            className="h-24 w-26 rounded-full"
            src={BernardoIcon}
        />
      <ul className="mt-4">
        {profile.map((perfil, index) => (
          <li key={index} className="flex flex-col mt-2">
            <p className="mt-5 text-sm font-semibold leading-6 text-gray-900" >Nome:</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{perfil.nome}</p>
            <p className="mt-5 text-sm font-semibold leading-6 text-gray-900" >Email:</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{perfil.email}</p>
            <p className="mt-5 text-sm font-semibold leading-6 text-gray-900" >Tipo de usuário:</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{perfil.tipo}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
}