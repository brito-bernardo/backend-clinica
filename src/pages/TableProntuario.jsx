import React, {useEffect, useState} from 'react'
import api from '../services/api'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';

export default function TableProntuario() {



  const [allProntuarios, setAllProntuarios] = useState([]);

  useEffect(() => {
    getProntuarios();
  }, []);
  async function getProntuarios() {
      try {
        const { data } = await api.get('main/prontuario/');
        let prontuarios = data;
        setAllProntuarios(prontuarios);
      } catch (error) {}
    }

  async function deletePost(id) {
    try {
      await api.delete(`main/prontuario/${id}/`);
      getProntuarios();
    } catch (error) {}
  }
const  TABLE_HEAD = ["Nome do paciente", "Numero do prontuário", " "]


  return (
    <div className='flex flex-col bg-white h-screen ml-64 mt-16 '>
        <div className='bg-white m-6'>
          <h1 className='text-[44px] text-[#274C52]'>Prontuários</h1>


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
            {allProntuarios.map(({ paciente, id }, index) => {
              return (
                <tr key={id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{paciente.user.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> 
                    <Link to = '/prontuario'> 
                      <ArrowCircleRightOutlinedIcon/>
                    </Link>
                    <button onClick={ () => deletePost(id)}>
                      <DeleteIcon/>
                    </button>
                    <Link to = '/diagnosticolist'>
                      <NoteAddOutlinedIcon/>
                    </Link>

                  
                  
                  </td>
                </tr>
              );
            })}
          </tbody>


        </table>
        </div>

        <div className='flex items-end m-6'>
        <Link to = '/prontuario'> 
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Criar novo prontuário</button>
        </Link>
        </div>

    </div>
  )
}
