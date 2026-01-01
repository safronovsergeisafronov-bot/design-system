import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Worlex Design System</h1>
        <p className="text-xl text-neutral-600 mb-8">
          A comprehensive design system for building consistent user interfaces
        </p>
        <Link
          href="/styleguide"
          className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
        >
          View Style Guide
        </Link>
      </div>
    </main>
  );
}
