'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const features = [
    "Vote on current bills and policies",
    "See real-time statistics and demographics",
    "Engage in meaningful political discussions",
    "Stay informed on the latest legislative actions"
  ];

  useEffect(() => {
    const interval = setInterval(() => setCount(prev => prev + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gradient-to-b from-purple-700 to-indigo-900 min-h-screen text-white">
      <div className="flex justify-center items-center">
        <span className="text-center text-4xl font-bold mt-10 bg-orange-500 p-6 rounded-lg">
          Under Construction 👷🏼🚧
        </span>
      </div>

      <header className="container mx-auto text-center py-20">
        <h1 className="text-5xl font-bold mb-6">
          Feel the Pulse of Democracy
        </h1>
        <p className="text-xl mb-8">
          Engage, vote, and understand public policies like never before.
        </p>
        <button className="bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition-colors">
          Get Started
        </button>
      </header>

      <section id="features" className="container mx-auto py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why PolicyFeeler?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="bg-white bg-opacity-10 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{feature}</h3>
              <p className="text-purple-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra justo eu nulla condimentum, at malesuada nunc tincidunt.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="container mx-auto py-20">
        <div className="bg-white bg-opacity-10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">About PolicyFeeler</h2>
          <p className="text-lg mb-4">
            PolicyFeeler is a revolutionary platform that bridges the gap between citizens and the political process. We believe that everyone should have a voice in shaping the policies that affect their lives.
          </p>
          <p className="text-lg mb-4">
            Our platform provides real-time voting, detailed analytics, and a space for constructive dialogue on current bills and policies. Join us in creating a more engaged and informed democracy.
          </p>
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold mb-4">Join {count} citizens making their voices heard</p>
            <button className="bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition-colors">
              Sign Up Now
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-purple-900 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 PolicyFeeler. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-purple-300">Privacy Policy</a>
            <a href="#" className="hover:text-purple-300">Terms of Service</a>
            <a href="#" className="hover:text-purple-300">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
