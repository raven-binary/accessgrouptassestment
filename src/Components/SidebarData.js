import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';
import * as ImIcons from 'react-icons/im';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <GrIcons.GrHomeRounded/>,
    cName: 'nav-text'
  },
  {
    title: 'My Products & Flightpaths',
    path: '/products',
    icon: <ImIcons.ImClock2/>,
    cName: 'nav-text'
  },
  {
    title: 'Resources',
    path: '/resources',
    icon: <FaIcons.FaHeart/>,
    cName: 'nav-text'
  },
  {
    title: 'SOW / Service Requests',
    path: '/team',
    icon: <MdIcons.MdShoppingCart/>,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <IoIcons.IoMdSettings/>,
    cName: 'nav-text'
  }
];