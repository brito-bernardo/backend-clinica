import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import FolderIcon from '@mui/icons-material/Folder';
import LogoutIcon from '@mui/icons-material/Logout';
import UserIcon from '@mui/icons-material/AccountBox';

export default function Sidebar() {
  return (
    <div className="flex h-screen mt-16  fixed">
      <div className="bg-white text-neutral-800 w-64 shadow-2xl">
        <ul className='mt-10 mb-16'>
          <Link to='/'>
          <li className="px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">
            <HomeIcon className='items-center'/> 
            
            Início
            
          </li>
          </Link>
          <Link to='/form'>
          <li className="px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">
            <AssignmentTurnedInIcon/>
            
            Prontuário
            
          </li>
          </Link>
          <Link to='/diagnostico'>
          <li className="px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">
            <FolderIcon/>
            Diagnóstico
          </li>
          </Link>
        </ul>
        <ul>
          <Link to='/perfil'>
          <li className="px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">
            <UserIcon/>
            Perfil
          </li>
          </Link>
          <Link to="/login">
          <li className="px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">
            <LogoutIcon/>
            Sair
          </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
