import React, { useState, useEffect } from 'react'
import api from '../services/api'
import Card1 from '../components/Card1.jsx'
import Card2 from '../components/Card2.jsx'

export default function Home() {

  const [allDiagnostico, setAllDiagnostico] = useState([]);

  
  useEffect(() => {
    getDiagnostico();
  }, []);

  
  async function getDiagnostico() {
    try {
      
      const { data } = await api.get('main/prontuario/5/diagnosticos/');
      let diagnostico = data;
      setAllDiagnostico(diagnostico);
    } catch (error) {
     
    }
  }
  return (

    
 
    <div className='flex bg-white h-screen ml-64 mt-16 ' >
      <div>
        <div className='last_update'>
          <h1 className='ml-6 mt-6 text-[44px] text-[#274C52]'>Últimas atualizações</h1>
          <div className='grid-container'>
            <div className='grid-item'>
              {allDiagnostico.slice(0,2).map(( diagnostico , index) => (
              <Card1 diagnostico={diagnostico} />
              ))}
            </div>
            <h1 className='ml-6 mt-6 text-[44px] text-[#274C52]'>Próximas consultas</h1>
              <Card2 />
          </div>

        </div>
      </div>
      <div>


      </div>
    </div>
  )
}
