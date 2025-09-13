
'use client';

import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
const navigation = [
  { name: 'موقع الكنيسة', href: '/church-mother-mary-google-map-location', current: false },
  { name: 'تاريخ الكنيسة', href: '/about', current: false },
  { name: 'الاباء الكهنة', href: '#', current: false },
  { name: ' الخدمات', href: '/services', current: true },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const NavbarRed: React.FC = () => {
    return (
 
           <Disclosure as="nav" style={{position:"relative", backgroundColor: '#7E1215', paddingInline: '.3rem' ,paddingBlock:"1rem", zIndex:10000,                boxShadow: '3px 7px 10px rgba(0, 0, 0, 0.11)' // Added light shadow
}} className='w-full
    '>
      <div className="mx-auto   px-1 sm:px-4 lg:px-4">
        <div className="relative flex h-13 items-center justify-between lg:h-9
        ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
           
            <div className="hidden sm:ml-6 sm:block  mt-1 mb-1">
              <div className="flex space-x-3 ">
                {navigation.map((item) => (
            
            <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      navigation.forEach((navItem) => {
                        navItem.current = navItem.name === item.name;
                      });
                    }}
                    className={classNames(
                      item.current ? 'bg-[#eeebca] text-[#7e1215] text-[17px] ' : 'text-white  hover:bg-[#eeebca36]  hover:text-white ',
                      'rounded-md px-3 py-2  text-[17px]',
                    )}
                  >
                    {item.name}
                </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div >
                <p className='hidden lg:block text-base   text-[white] mx-2 text-[18px]'   >
مَا أَحْلَى مَسَاكِنَكَ يَا رَبَّ الْجُنُودِ. تَشْتَاقُ نَفْسِي إِلَى دِيَارِ الرَّبّ     </p>
            </div>
            <button
              type="button"
              className="relative rounded-[10px] p-1 text-gray-400 text-[17px] focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-7 text-[white]" />
            </button>

            {/* Profile dropdown */}
           {/* <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
            شئ ما
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                {/* <MenuItem>
                 <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>*/}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                      item.current ? 'bg-[#eeebca] text-[#7e1215]' : 'text-white hover:bg-[#eeebca36] hover:text-white',
                'block rounded-[10px] px-2 py-1 my-[20px] text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
     );
};

export default NavbarRed;