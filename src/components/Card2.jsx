import React from 'react';

const people = [
    {
      especialidade: 'Dermatologista:',
      nome: 'Dr. Pedro',
      consulta: 'Revisão clinica',
      data: '2023- 04 - 27',
    },
    // Resto das pessoas...
  ];

export default function Card2() {
    return (
    <ul role="list" className="divide-y divide-gray-100 ml-6 mt-6 h-48 rounded bg-[#407C87]">
      {people.map((person) => (
        <li key={person} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4 m-3">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-white" >{person.especialidade}</p>
              <p className="mt-1 truncate text-xs leading-5 text-white">{person.nome}</p>
              <p className="mt-5 text-sm font-semibold leading-6 text-white" >Motivo:</p>
              <p className="mt-1 truncate text-xs leading-5 text-white">{person.consulta}</p>
            </div>
            <div className="ml-96 -mt-4 flex items-center mb-36 gap-x-1.5">
                <span class="ml-64 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-[#407C87] ring-1 ring-inset ring-blue-700/10 bg-[#D3E1E2]">
                  {person.data}
                </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
    )
  }