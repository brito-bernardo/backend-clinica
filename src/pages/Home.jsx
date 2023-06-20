import React from 'react'
import Card1 from '../components/Card1.jsx'
import Card2 from '../components/Card2.jsx'

export default function Home() {
  return (
    <div className='flex bg-white h-screen ml-64 mt-16 ' >
      <div>
        <div className='last_update'>
          <h1 className='ml-6 mt-6 text-[44px] text-[#274C52]'>Últimas atualizações</h1>
          <div className='grid-container'>
            <div className='grid-item'>
              <Card1 />
              <Card1 />
            </div>
            <h1 className='ml-6 mt-6 text-[44px] text-[#274C52]'>Próximas consultas</h1>
              <Card2 />
              <Card2 />
          </div>

        </div>
      </div>
      <div>


      </div>
    </div>
  )
}
