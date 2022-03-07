
// File to edit and use for a later time, in order to create user specific profile pages and implement follow/unfollow backend functionality



// import React from 'react';
// import { Redirect, useParams } from 'react-router-dom';
// import { GET_ONE_USER, QUERY_ME } from '../utils/queries'
// import { HomeIcon } from '@heroicons/react/solid'
// import { useQuery } from '@apollo/client';
// import Auth from '../utils/auth'
// import {UPDATE_PORTFOLIO} from '../utils/mutations'

// const miniNav = [
//   { name: 'My Profile', href: '/ProfilePage', current: false },

// ]

// const ProfilePage = () => {
  
//   const { username: userParam } = useParams();
//   const { loading, data } = useQuery(userParam ? GET_ONE_USER : QUERY_ME, {
//     variables: { username: userParam },
   
//   }
 
//     ) 

//   const user = data?.me || data?.user || {};
//   // redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Redirect to="/me" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this. Use the navigation links above to
//         sign up or log in!
//       </h4>
//     );
//   }
//   console.log(user.username);
//   return (
//     <>


//       {/*miniNav*/}
 
//       <nav className="hidden bg-slate-100 border-b border-gray-200 lg:flex" aria-label="Breadcrumb">
//         <ol role="list" className="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8">
//           <li className="flex">
//             <div className="flex items-center">
//               <a href="#" className="text-gray-400 hover:text-gray-500">
//                 <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
//                 <span className="sr-only">Home</span>
//               </a>
//             </div>
//           </li>
//           {miniNav.map((item) => (
//             <li key={item.name} className="flex">
//               <div className="flex items-center">
//                 <svg
//                   className="flex-shrink-0 w-6 h-full text-gray-200"
//                   preserveAspectRatio="none"
//                   viewBox="0 0 24 44"
//                   fill="currentColor"
//                   xmlns="http://www.w3.org/2000/svg"
//                   aria-hidden="true"
//                 >
//                   <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
//                 </svg>
//                 <a
//                   href={item.href}
//                   className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </a>
//               </div>
//             </li>
            
//           ))}
//         </ol>
//       </nav>

//       <main className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
//         <form>

//           <div className="space-y-6">
//             <div>
//               <h1 className="text-lg leading-6 font-medium text-gray-900">User Details</h1>
            
//             </div>

//             <div>
//               <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                
//               Viewing {user.username}'s Profile.
//               </label>
//               <div className="mt-1">
//                 <p>
                 
//                  </p>
//               </div>
//             </div>

//             <div className="col-span-3 sm:col-span-2">
//               <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <div className="mt-1 flex rounded-md shadow-sm">
              
//                 <p className=''>
//                   {user.email}
//                   </p>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Portfolio Link</label>
//               <div className="mt-1 flex rounded-md shadow-sm">
              
//                 <p className=''>
//                   {user.portfolios.portfoliolink}
//                   </p>
//               </div>
//             </div>
//             <div>
//               <div className="flex justify-center px-6 pt-5 pb border-2 rounded-md">
//               <label className="block text-sm font-medium text-gray-700">Portfolio Image</label>
//                 <div className="space-y-1 mb-2 text-center">
//                 <img class="pic" src={user.portfolios.portfolioImage}></img>
//                   <svg
//                     className="mx-auto h-12 w-12 text-gray-400"
//                     stroke="currentColor"
//                     fill="none"
//                     viewBox="0 0 48 48"
//                     aria-hidden="true"
//                   >
                
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <button onClick={editProfile}
//                 type= 'submit'
//                 className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
//               >
//                 Save
//               </button>
//             </div>
//             <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
//               <label htmlFor="bio" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                
//               </label>
//               <div className="mt-1 sm:mt-0 sm:col-span-2">
               
//                 <p className="mt-2 text-sm text-gray-500">Following</p>
//                 <p className='followings'>
//                   {user.followings.id}
//                   </p>
//               </div>
//             </div>
//           </div>
//         </form>
//       </main>
//     </>
//   )
// }

// function editProfile(){
//     document.location.replace('/ProfilePage')
    
// }
// export default ProfilePage

