import React, {useEffect, useState} from 'react'
import api from '../services/api'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';

export default function TableDiagnostico() {



  const [allDiagnosticos, setAllDiagnosticos] = useState([]);

  useEffect(() => {
    getDiagnostico();
  }, []);
  async function getDiagnostico() {
      try {
        const { data } = await api.get('main/prontuario/5/diagnosticos/');
        let diagnostico = data;
        setAllDiagnosticos(diagnostico);
      } catch (error) {}
    }

  async function deletePost(id) {
    try {
      await api.delete(`main/diagnosticos/8/prontuario/${id}/`);
      getDiagnostico();
    } catch (error) {}
  }
const  TABLE_HEAD = ["Nome do paciente", "Numero do diagnóstico", " "]


  return (
    <div className='flex flex-col bg-white h-screen ml-64 mt-16 '>
        <div className='bg-white m-6'>
          <h1 className='text-[44px] text-[#274C52]'>Diagnosticos</h1>


        </div>
        
        
        <div className='w-full'>
          <table className='w-full'>
          <thead className='bg-white'>
            <tr>
              {TABLE_HEAD.map((item) => (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" key={item}>  
                {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allDiagnosticos.map(( diagnostico , index) => {
              return (
                <tr key={diagnostico}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{diagnostico.prontuario.paciente.user.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{diagnostico.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={ () => deletePost(diagnostico.id)}>
                      <DeleteIcon/>
                    </button>

                  
                  
                  </td>
                </tr>
              );
            })}
          </tbody>


        </table>
        </div>

        <div className='flex items-end m-6'>
        <Link to = '/diagnostico'> 
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Criar novo diagnostico</button>
        </Link>
        </div>

    </div>
  )
}
