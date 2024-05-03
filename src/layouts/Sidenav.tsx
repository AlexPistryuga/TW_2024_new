import React, {useState} from "react";
import {AiOutlineMenu} from "react-icons/ai";
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import GpsFixedRoundedIcon from '@mui/icons-material/GpsFixedRounded';
import HouseSidingRoundedIcon from '@mui/icons-material/HouseSidingRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from "@mui/material/Button";
import {Input, Modal} from "@mui/material";
import Box from "@mui/material/Box";

const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    }
    const handleMovieClick = () => {
        window.scrollBy({
            top: 1000,
            behavior: "smooth"
        });
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-amber-50/90 flex flex-col justify-center items-center z-20'>
                        <a href="#main"
                           className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-250 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <HouseSidingRoundedIcon size={20}/>
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#movie"
                           className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-250 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleMovieClick}>
                            <MovieRoundedIcon size={20}/>
                            <span className='pl-4'>Movie</span>
                        </a>
                        <a href="#actors"
                           className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-250 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <RecentActorsIcon size={20}/>
                            <span className='pl-4'>Actors</span>
                        </a>
                        <a href="#places    "
                           className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-250 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GpsFixedRoundedIcon  size={20}/>
                            <span className='pl-4'>Places</span>
                        </a>
                        <a href="#contact"
                           className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-250 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <ContactMailRoundedIcon size={20}/>
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                ) : (
                    ''
                )}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href="#main"
                       className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <HouseSidingRoundedIcon size={20}/>
                    </a>
                    <a href="#movie"
                       className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <MovieRoundedIcon size={20} onClick={handleMovieClick}/>
                    </a>
                    <a href="#actors"
                       className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <RecentActorsIcon size={20}/>
                    </a>
                    <a href="#places"
                       className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <GpsFixedRoundedIcon size={20}/>
                    </a>
                    <a href="#contact"
                       className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <ContactMailRoundedIcon size={20}/>
                    </a>
                </div>
            </div>
            <div className='md:block hidden fixed right-4 top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href="#login"
                       className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>

                        <div>
                            <Button onClick={handleOpen}>
                                <AccessibilityNewIcon size={20}/>
                            </Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <form style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                                        <Input type="email"/>
                                        <Input type="password"/>
                                        <Button onClick={handleClose}>
                                            Login
                                        </Button>
                                    </form>
                                </Box>
                            </Modal>
                        </div>
                    </a>
                    <div className='md:block hidden fixed right-4 top-[36%] z-10'>
                        <a href="#fav"
                           className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                            <FavoriteIcon size={20}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidenav