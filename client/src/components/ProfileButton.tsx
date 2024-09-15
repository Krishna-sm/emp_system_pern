import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { CiUser } from "react-icons/ci";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
const ProfileButton = () => {
  return (
    <>      
      <div className=" ">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white   focus:outline-none    ">
          <CiUser className="text-2xl" />
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
              <MenuItem>
            <Link to="/" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <Square2StackIcon className="size-4 fill-white/30" />
              Dashboard
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/profile" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <PencilIcon className="size-4 fill-white/30" />
              Profile
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
            </Link>
          </MenuItem>
        
          <div className="my-1 h-px bg-white/5" />
         
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <FaSignOutAlt className="size-4 fill-white/30" />
              Logout
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
                </>
  )
}

export default ProfileButton;