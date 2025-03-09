import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm ring-inset ring-gray-300 hover:bg-gray-50">
          Other
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <button
                className={`block w-full px-4 py-2 text-sm text-gray-700 ${
                  active ? 'bg-gray-100 text-gray-900' : ''
                }`}
              >
                Account settings
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                className={`block w-full px-4 py-2 text-sm text-gray-700 ${
                  active ? 'bg-gray-100 text-gray-900' : ''
                }`}
              >
                Support
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                className={`block w-full px-4 py-2 text-sm text-gray-700 ${
                  active ? 'bg-gray-100 text-gray-900' : ''
                }`}
              >
                License
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                className={`block w-full px-4 py-2 text-sm text-gray-700 ${
                  active ? 'bg-gray-100 text-gray-900' : ''
                }`}
              >
                Sign out
              </button>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
