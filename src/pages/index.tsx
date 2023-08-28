import Head from 'next/head';
import Dashboard from '@/pages/dashboard';

import { useSession } from 'next-auth/react';
import Login from '@/pages/auth';
import scss from './Home.module.scss'
import React from "react";

const Home: React.FC =()=> {
  const { data: session } = useSession();
  return (
      <main className={scss.main}>
      {session && <Dashboard />}
      {!session && <Login />}
      </main>
  );
};



export default Home;