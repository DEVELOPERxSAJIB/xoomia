import Header from "./../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { useState } from 'react';

const LayoutPage = () => {
    const [bg,setBg]=useState("bg-slate-500");

  return (
    <div className='min-w-screen'>
      <Navbar />
      <div className={`flex items-start max-sm:flex-col max-lg:flex-col`}>
      <Sidebar bg={bg}/>
      <Header bg={bg} setBg={setBg} />
      </div>
    </div>
  );
};

export default LayoutPage;
