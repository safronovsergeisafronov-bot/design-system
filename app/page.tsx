'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Redirect to static HTML style guide
    window.location.href = '/style-guide.html';
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-xl">Redirecting to style guide...</p>
    </div>
  );
}
