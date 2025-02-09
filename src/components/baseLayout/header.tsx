import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="bg-gray-800">
      <div className="containerLayout flex items-center h-16 text-white">
        <Link href="/" className="text-xl hover:underline">
          Inicio
        </Link>
      </div>
    </div>
  );
};

export default Header;
