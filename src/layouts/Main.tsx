import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
export interface IUser {
    body: string;
    id: number;
    title: string;
    userId: number;
}

const Main = () => {
    const fetchMovies = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div id='main'>
            <img
                className='w-full h-screen object-cover object-left'
                src='https://rare-gallery.com/uploads/posts/533788-empire-state.jpg'
                alt='/'
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-orange-300/20 flex justify-center items-center'>
                <div className='max-w-[700px]'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-orange-100 text-center'>
                        START | Movie
                    </h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-white justify-center'>
                        We
                        <TypeAnimation
                            sequence={[
                                'combine',
                                1000,
                                'make',
                                1000,
                                'inspire',
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-center pt-6 max-w-[500px] w-full'>
                        <FaTwitter className='cursor-pointer text-orange-200' size={20} />
                        <FaInstagram className='cursor-pointer text-orange-200' size={20} />
                        <FaFacebook className='cursor-pointer text-orange-200' size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;