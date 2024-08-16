import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1a40] text-white py-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Melody Master. All rights reserved.</p>
        <p className="mt-2">Built with ❤️ by Nawal Fatima</p>
      </div>
    </footer>
  );
}
