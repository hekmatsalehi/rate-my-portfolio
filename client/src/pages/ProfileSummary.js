
import { HomeIcon } from '@heroicons/react/solid'

const userName= 'User Name Will go Here'
const link = 'porfolio link will go here'
const avatar= "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png"




const miniNav = [
  { name: 'My Profile', href: '/ProfilePage', current: false },

]
export default function ProfileSummary() {


  return (
    <>


      {/*miniNav*/}
      <nav className="hidden bg-slate-100 border-b border-gray-200 lg:flex" aria-label="Breadcrumb">
        <ol role="list" className="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8">
          <li className="flex">
            <div className="flex items-center">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {miniNav.map((item) => (
            <li key={item.name} className="flex">
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 w-6 h-full text-gray-200"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 44"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <a
                  href={item.href}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              </div>
            </li>
            
          ))}
        </ol>
      </nav>

      <main className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
        <form>

          <div className="space-y-6">
            <div>
              <h1 className="text-lg leading-6 font-medium text-gray-900">User Details</h1>
            
            </div>

            <div>
              <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                
                {userName}
              </label>
              <div className="mt-1">
                <p>
                 
                 </p>
              </div>
            </div>

            <div className="col-span-3 sm:col-span-2">
              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                Portfolio Link
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
              
                <p className=''>
                  {link}
                  </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
            </div>
            <div>
              <div className="flex justify-center px-6 pt-5 pb border-2 rounded-md">
             
                <div className="space-y-1 mb-2 text-center">
                <img class="pic" src={avatar}></img>
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                
                  </svg>
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Bio
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
               
                <p className="mt-2 text-sm text-gray-500">This is my bio</p>
              </div>
            </div>



            <div className="flex justify-end">
              <button onClick={editProfile}
                type= 'button'
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Edit
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}

function editProfile(){
    document.location.replace('/ProfilePage')
    
}