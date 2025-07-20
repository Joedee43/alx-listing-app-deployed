import React from 'react';
import Layout from '../components/layout/Layout';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Layout>
        <Header />
        <main className="flex-grow container mx-auto px-4">
          <h1 className="text-3xl font-bold my-8">Welcome to StayEase</h1>
          <p className="text-gray-700 mb-4">  
            Discover your perfect stay with us. Whether you're looking for a cozy apartment, a luxurious villa, or a budget-friendly hostel, we have something for everyone.
          </p>
          <p className="text-gray-700 mb-4">  
            Explore our wide range of accommodations, from city center apartments to countryside retreats. Book your next adventure today!
          </p>
        </main>
        <Footer />
      </Layout>
    </div>
    
  );
}
