// components/GlowText.tsx
import React from 'react';

const GlowText: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <h1 className="text-6xl font-extrabold text-white text-center relative overflow-hidden">
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent to-white opacity-40 animate-lightfall" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-600">
          Aravind Chamaakuri
        </span>
            </h1>
        </div>
    );
};

export default GlowText;
