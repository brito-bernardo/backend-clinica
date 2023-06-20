import React from 'react';
import { Link } from 'react-router-dom'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import LogoutIcon from '@mui/icons-material/Logout';
import UserIcon from '@mui/icons-material/AccountBox';
import BernardoIcon from '../assets/BernardoIcon.jpg'
import Logo2Icon from '../assets/Logo (2).png'


const Topbar = () => {
  return (
    <div className="flex flex-col h-16 fixed inset-x-0 top-0">
      
      <div className="bg-white h-16  flex items-center justify-between px-4 shadow-2xl text-cyan-800">
      <div className="flex items-center justify-center h-16 ">
          <img src={Logo2Icon} className='w-18 h-10 mx-2 fill-black' alt='logo'></img>
        </div>
        <div className='ml-auto mr-2'>Admin</div>
        <div>
          <Menu>
            <MenuHandler>
              <Avatar
                variant="circular"
                alt="candice wu"
                className="cursor-pointer h-12 w-12 mr-10 rounded-full"
                src={BernardoIcon}
              />
            </MenuHandler>
            <MenuList>
              <MenuItem className="flex items-center gap-2">
                <UserIcon strokeWidth={2} className="h-4 w-4" />
                <Link to='/perfil'>
                <Typography variant="small" className="font-normal">
                  Meu perfil
                </Typography>
                </Link>
              </MenuItem>
              <hr className="my-2 border-blue-gray-50" />
              <MenuItem className="flex items-center gap-2">
                <LogoutIcon strokeWidth={2} className="h-4 w-4" />
                <Link to="/login">
                <Typography variant="small" className="font-normal">
                  Sair
                </Typography>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
