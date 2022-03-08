import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_FEEDBACK } from '../../utils/mutations';

import Auth from '../../utils/auth';

const FeedbackForm = ({ portfolioId }) => {
  const [feedbackText, setFeedbackText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addFeedback, { error }] = useMutation(ADD_FEEDBACK);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addFeedback({
        variables: {
          portfolioId,
          feedbackText,
          feedbackAuthor: Auth.getProfile().data.username,
        },
      });

      setFeedbackText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'feedbackText' && value.length <= 280) {
      setFeedbackText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div class="w-screen md:w-2/3 mx-auto">
      <h4>Feedback on this portfolio</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div class="">
              <textarea
                name="feedbackText"
                placeholder="Add your feedback..."
                value={feedbackText}
                class="rounded w-full"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mt-2">
              <button class="block m-auto rounded text-white no-underline p-2 mb-4 bg-cyan-500 hover:bg-cyan-400" type="submit">
                Add Feedback
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to give feedback. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default FeedbackForm;













// import { Fragment, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { XIcon } from '@heroicons/react/outline'

// export default function Overlay() {
//   const [open, setOpen] = useState(true)

//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
//         <div className="absolute inset-0 overflow-hidden">
//           <Dialog.Overlay className="absolute inset-0" />

//           <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//             <Transition.Child
//               as={Fragment}
//               enter="transform transition ease-in-out duration-500 sm:duration-700"
//               enterFrom="translate-x-full"
//               enterTo="translate-x-0"
//               leave="transform transition ease-in-out duration-500 sm:duration-700"
//               leaveFrom="translate-x-0"
//               leaveTo="translate-x-full"
//             >
//               <div className="pointer-events-auto w-screen max-w-md">
//                 <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
//                   <div className="px-4 sm:px-6 items-center">
//                     <div className="flex items-start justify-between">
//                       <Dialog.Title className="text-lg font-medium text-gray-900 "> First Name Last Name </Dialog.Title>
//                       <div className="ml-3 flex h-7 items-center">
//                         <button
//                           type="button"
//                           className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                           onClick={() => setOpen(false)}
//                         >
//                           <span className="sr-only">Close panel</span>
//                           <XIcon className="h-6 w-6" aria-hidden="true" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="relative h-40 sm:h-56">
//                           <img
//                             className="absolute h-full w-full object-cover rounded-full mt-2"
//                             src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png"
//                             alt=""
//                           />
//                         </div>
//                   <div className="relative mt-6 flex-1 px-4 sm:px-6">
                
//                     <div className="absolute inset-0 px-4 sm:px-6">
//                       <div className="h-full border-2 border-solid border-gray-200" aria-hidden="true" />
//                     </div>
                    
//                   </div>
//                 </div>
//               </div>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   )
// }
