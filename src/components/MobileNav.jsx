'use client';

import { useState } from 'react';

export default function MobileNav({ aboutUrl, contactUrl }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Öppna meny"
        aria-expanded={open}
        className="flex flex-col justify-center gap-1.5 w-8 h-8"
      >
        <span className={`block h-0.5 w-6 bg-gray-900 transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block h-0.5 w-6 bg-gray-900 transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-6 bg-gray-900 transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-md flex flex-col items-center gap-4 py-6 z-50">
          <a href="/" className="text-gray-700 font-semibold">HEM</a>
          <a href={`/${aboutUrl}`} className="text-gray-700 font-semibold">OM OSS</a>
          <a href={`/${contactUrl}`} className="text-gray-700 font-semibold">KONTAKT</a>
        </div>
      )}
    </div>
  );
}