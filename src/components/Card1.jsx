import React from 'react';

const people = [
    {
      especialidade: 'Dermatologista:',
      nome: 'Dr. Lorem Ipsum',
      diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      data: '27 / 04',
    },
    // Resto das pessoas...
  ];

export default function Card1() {
    return (
    <ul role="list" className="divide-y divide-gray-100 ml-6 mt-6 h-48 rounded" style={{backgroundColor: "#D3E1E2"}}>
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4 m-3">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900" >{person.especialidade}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.nome}</p>
              <p className="mt-5 text-sm font-semibold leading-6 text-gray-900" >Diagnóstico:</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.diagnostico}</p>
            </div>
            <div className=" -mt-4 flex items-center mb-36 gap-x-1.5">
                <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-blue-700/10" style={{backgroundColor: "#407C87"}}>
                  {person.data}
                </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
    )
  }