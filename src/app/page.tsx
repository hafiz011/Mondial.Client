import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white sm:text-6xl">
            Home Page
          </h1>
          <p className="max-w-xl text-lg text-zinc-700 dark:text-zinc-300">
            Welcome to the home page of our Next.js application! This is where you can find the latest updates and features.
          </p>
          <button className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
            <a href="/signup">Sign Up</a>
          </button>
          <button className="rounded-md bg-gray-200 px-4 py-2 text-zinc-900 hover:bg-gray-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">
            <a href="/login">Login</a>
          </button>
        </div>
        
      </main>
    </div>
  );
}
