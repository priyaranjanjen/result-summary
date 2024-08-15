import './App.css'

import memory from '../assets/images/icon-memory.svg';
import reaction from '../assets/images/icon-reaction.svg';
import verbal from '../assets/images/icon-verbal.svg';
import visual from '../assets/images/icon-visual.svg';

export default function App() {
  return (
    <div className="bg-neutral-pale-blue min-h-screen flex md:items-center md:justify-center ">

      <div className='bg-neutral-white w-full md:rounded-3xl flex flex-col md:flex-row md:w-1/2'>

        <aside className='custom-gradient w-full rounded-b-3xl md:rounded-3xl flex flex-col justify-center items-center gap-5 p-8'>

          <h3 className='text-neutral-light-lavender font-semibold'>Your Result</h3>

          <div className='bg-gradient-to-b from-gradient-violet-blue to-gradient-light-royal-blue rounded-full py-8 px-9 flex flex-col items-center gap-1'>
            <span className='text-5xl text-neutral-white'>76</span> 
            <span className='text-gray-400 text-xs'>of 100</span>
          </div>

          <h3 className='text-neutral-white text-xl font-bold'>Great</h3>

          <p className='text-center text-neutral-light-lavender text-sm tracking-wider'>You Scored higher than 65% of the people who have taken these tests.</p>

        </aside>

        <div className='p-8 w-full flex flex-col gap-5'>
          <h3 className=' text-neutral-dark-gray-blue font-bold'>Summary</h3>
          <div className='flex flex-col gap-2'>

            <div className="flex justify-between items-center p-2 bg-red-50 rounded-lg">
              <div className="flex items-center gap-1">
                <img src={reaction} alt="Reaction"/>
                <span className="text-sm text-primary-light-red font-bold">Reaction</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-base font-bold">80</span>
                <span className="text-sm text-gray-600">/ 100</span>
              </div>
            </div>


            <div className="flex justify-between items-center p-2 bg-yellow-50 rounded-lg">
              <div className="flex items-center gap-1">
                <img src={memory} alt="memory" />
                <span className="text-sm text-primary-orangey-yellow font-bold">Memory</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-base font-bold">92</span> 
                <span className="text-sm text-gray-600"> / 100</span>
              </div>
            </div>

            <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
              <div className="flex items-center gap-1">
                <img src={verbal} alt="memory" />
                <span className="text-sm text-primary-green-teal font-bold">Verbal</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-base font-bold">61</span> 
                <span className="text-sm text-gray-600"> / 100</span>
              </div>
            </div>

            <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-1">
                <img src={visual} alt="memory" />
                <span className="text-sm text-primary-cobalt-blue font-bold">Visual</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-base font-bold">72</span> 
                <span className="text-sm text-gray-600"> / 100</span>
              </div>
            </div>

          </div>
          <button className='bg-neutral-dark-gray-blue py-2 text-white rounded-3xl'>Continue</button>
        </div>

      </div>
    </div>
    
  )
}
