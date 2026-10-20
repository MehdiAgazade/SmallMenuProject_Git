import React from 'react'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReactNode } from 'react'

type WebsiteLayoutProps = {
  children: ReactNode;
};


const WebsiteLayout = ({children}: WebsiteLayoutProps) => {
  return (
    <div>
      <Header />
        <div className='container'>
            {children}
        </div>
      <Footer/>
    </div>
  )
}

export default WebsiteLayout
