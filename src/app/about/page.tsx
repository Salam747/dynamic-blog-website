import React from 'react';
import Image from 'next/image';
import aboutImage from '../../../public/assets/about.jpg'; // Example path, replace with your actual path

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen py-10 px-4 bg-gray-100 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-gray-700 mb-8 text-center">
                Welcome to Blog Brew! We bring you the latest in tech, wellness, travel, recipes, creativity, and finance. Our mission is to inspire and inform, helping you live your best life.
                <br /><br />
                Join our community, explore diverse topics, and be part of a journey towards knowledge and inspiration.
            </p>
            <div className="mt-8 flex justify-center">
                <Image 
                    src={aboutImage} // Use the imported image
                    alt="About Us" 
                    width={500} 
                    height={350} 
                    className="rounded-lg mb-6"
                />
            </div>
            <div className="flex justify-center items-center mt-8">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default AboutPage;
