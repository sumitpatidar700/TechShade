import React, { useState, useEffect } from 'react';
import logo from './../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './common/Dropdown';

function Header() {
    const [isScreenLarge, setIsScreenLarge] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenLarge(window.innerWidth > 720);
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const items = [
        { name: 'Home', id: 'home' },
        { name: 'Products', id: 'products' },
        { name: 'Services', id: 'about-me' },
        { name: 'Brands', id: 'projects' },
        { name: 'Contact', id: 'contact' }
    ];

    const menuClicked = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (id) => {
        // const section = document.getElementById(id);
        // if (section) {
        //     const headerHeight = 80; // Adjust this value based on your header's height
        //     const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
        //     window.scrollTo({ top: sectionPosition - headerHeight, behavior: 'smooth' });
        // }
        closeMenu();
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isScreenLarge ? (
                <div className='w-full  justify-between fixed shadow-lg flex bg-white z-50  border-b-2 2xl:px-30 xl:px-40 lg:px-20 sm:px-4'>

                    <div className='cursor-pointer text-green-500 text-3xl flex justify-start items-center  font-bold'> <img src={logo} alt="" width={30} />
                        <h2 className='mx-2'> TechShed</h2>
                    </div>
                    <ul className='flex items-center p-2 '>
                        {items.map((item, index) => (
                            <li
                                className='flex p-2 mx-4 justify-between cursor-pointer rounded-lg py-2  font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200'
                                key={index} onClick={() => handleItemClick(item.id)}
                            >
                                {item.name}
                            </li>
                        ))}
                        <Dropdown />
                    </ul>

                    <div className='flex justify-between items-center '>

                        <button className='mx-2 border px-3 py-1 bg-green-500 text-white rounded-md'>login</button>
                        <button className='mx-2 border px-3 py-1 bg-green-500 text-white rounded-md'>Signup</button>
                    </div>

                </div>
            ) : (
                <>
                    <div className='  h-16 px-10 flex bg-white z-50 fixed w-full items-center justify-between border-b-2'>
                        <FontAwesomeIcon icon={faBars} size='lg' onClick={menuClicked} />
                        <img src={logo} className='' width={30} alt='logo' />

                    </div>
                    {isOpen && (
                        <>
                            <div className='fixed top-0 left-0 w-full h-full z-50' onClick={closeMenu}>
                                <div className='w-[75%] h-full bg-white shadow-md transition-transform duration-300 transform'>
                                    <ul className='flex mt-16 flex-col items-center justify-start h-full'>
                                        {items.map((item, index) => (
                                            <li
                                                className='p-4 px-10 w-full text-left border-b cursor-pointer hover:bg-gray-200'
                                                key={index}
                                                onClick={() => handleItemClick(item.id)}
                                            >
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='fixed top-0 right-0 w-[25%] h-full z-30 bg-black opacity-50' onClick={closeMenu}></div>
                        </>
                    )}
                </>
            )}
        </>
    );
}

export default Header;
