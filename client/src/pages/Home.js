import React,{useState} from 'react';
import '../styles/tailwind.css';

import Portfolios from "./Portfolios.js";

export default function Home() {
 
  // We need to have access to the arrays of the Portfolios
  // this state will hold "array of portfolios"
  const [portfolios] = useState()
  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Sora&display=swap" rel="stylesheet"/>
      <Portfolios portfolios = {portfolios} />
    </div>

  
    );
  }


















  // <div id="home" className="bg-slate-600 m-auto w-screen md:w-screen md:h-fill pt-20 pb-20">
  //   <div className="max-w-md md:w-screen md:max-w-screen-2xl m-auto md:m-auto">
  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:max-w-screen-lg m-auto">
  //       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  //         <div className="md:flex border">
  //           <div className="md:shrink-0">
  //             <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://alvarotrigo.com/blog/assets/imgs/2021-10-16/lynn-fisher-web-developer-portfolio-example.webp" alt="preview"></img>
  //           </div>
  //           <div className="p-12 w-96 text-center">
  //             <div className="uppercase tracking-wide text-sm text-teal-400 font-semibold">UI/UX Designer</div>
  //             <p className="block mt-1 text-lg leading-tight font-medium text-black">Lynn Fisher</p>
  //             <a href="https://lynnandtonic.com/" target="_blank" rel="noopener noreferrer"  ><button className="mt-3 bg-white text-sm hover:animate-pulse hover:text-teal-400 hover:border-teal-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">View Portfolio</button></a>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  //         <div className="md:flex">
  //           <div className="md:shrink-0">
  //             <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://alvarotrigo.com/blog/assets/imgs/2021-10-16/cory-web-developer-portolio.webp" alt="preview"></img>
  //           </div>
  //           <div className="p-12 w-96 text-center">
  //             <div className="uppercase tracking-wide text-sm text-teal-400 font-semibold">Full Stack Developer</div>
  //             <p className="block mt-1 text-lg leading-tight font-medium text-black">Cory Hughart</p>
  //             <a href="https://coryhughart.com/" target="_blank" rel="noopener noreferrer"><button className="mt-3 bg-white text-sm hover:animate-pulse hover:text-teal-400 hover:border-teal-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">View Portfolio</button></a>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  //         <div className="md:flex">
  //           <div className="md:shrink-0">
  //             <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://alvarotrigo.com/blog/assets/imgs/2021-10-16/bruno-web-developer-portfolio.webp" alt="test"></img>
  //           </div>
  //           <div className="p-12 w-96 text-center">
  //             <div className="uppercase tracking-wide text-sm text-teal-400 font-semibold">Full Stack Developer</div>
  //             <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Bruno Simon</p>
  //             <a href="https://bruno-simon.com/" target="_blank" rel="noopener noreferrer"><button className="mt-3 bg-white text-sm hover:animate-pulse hover:text-teal-400 hover:border-teal-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">View Portfolio</button></a>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  //         <div className="md:flex m-auto">
  //           <div className="md:shrink-0">
  //             <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://alvarotrigo.com/blog/assets/imgs/2021-10-16/eric-van-holtz-developer-portfolio-example.webp" alt="test"></img>
  //           </div>
  //           <div className="p-12 w-96 text-center">
  //             <div className="uppercase tracking-wide text-sm text-teal-400 font-semibold">Web Developer</div>
  //             <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Eric Van Holtz</p>
  //             <a href="https://vanholtz.co/" target="_blank" rel="noopener noreferrer"><button className="mt-3 bg-white text-sm hover:animate-pulse hover:text-teal-400 hover:border-teal-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">View Portfolio</button></a>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  //         <div className="md:flex m-auto">
  //           <div className="md:shrink-0">
  //             <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://alvarotrigo.com/blog/assets/imgs/2021-10-16/shane-mielke-developer-portfolio-example.webp" alt="test"></img>
  //           </div>
  //           <div className="p-12 w-96 text-center">
  //             <div className="uppercase tracking-wide text-sm text-teal-400 font-semibold">Designer</div>
  //             <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Shane Mielke</p>
  //             <a href="https://www.shanemielke.com/" target="_blank" rel="noopener noreferrer"><button className="mt-3 bg-white text-sm hover:animate-pulse hover:text-teal-400 hover:border-teal-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">View Portfolio</button></a>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  //         <div className="md:flex m-auto">
  //           <div className="md:shrink-0">
  //             <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://alvarotrigo.com/blog/assets/imgs/2021-10-16/malte-gruhl-developer-portfolio-example.webp" alt="test"></img>
  //           </div>
  //           <div className="p-12 w-96 text-center">
  //             <div className="uppercase tracking-wide text-sm text-teal-400 font-semibold">Web Developer</div>
  //             <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Tim Smith</p>
  //             <a href="https://mypoorbrain.com/" target="_blank" rel="noopener noreferrer"><button className="mt-3 bg-white text-sm hover:animate-pulse hover:text-teal-400 hover:border-teal-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">View Portfolio</button></a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>