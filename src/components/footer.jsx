import React, { useState } from 'react';
//import data from '../../content/data.json'
import insta from "../images/instagram.svg"
import logo_src from '../images/icon.svg';
const contact_details = [
  {
    name: 'Instagram',
    icon: 'icon',
  },
  {
    name: 'Discord',
    icon: 'icon2',
  },
  {
    name: 'mail',
    icon: 'icon3',
  },
];
const Newletter = () => {
  const [opened,changestate] = useState(true);
  return (
    <>
    <div className='inline-block relative cursor-pointer' onClick={() => {changestate(true); console.log("clicked")}}>
          <div className='h-px bg-gray-300 absolute w-full bottom-0' />
          Signup 
        </div>
    <div id="modal" className={opened?"opacity-100 scale-100 visible":"opacity-0 scale-0 invisible"}>
				<div class="flex-item">
					<div class="content">		
						<h2 class="title">Enter Your E-Mail for updates</h2>
						<div class="field">
								<input type="email" value="" aria-required="true" aria-invalid="true" placeholder="Email Address" required/>
								
							</div>
					</div>
					<div class="close-button">
						
					</div>
				</div>
				
			<a id="back-screen" onClick={() => changestate(false)}></a>
		</div>	
    </>

  )
}
const Footer = () => (
  <div className='bg-base'>
    <div className='flex justify-center pt-6'>
      <div className='w-full h-px bg-gray-900'></div>
    </div>
    <div className='footer grid col-1 lg:row-1 lg:grid-flow-col row-gap-8 lg:gap-0 justify-center lg:justify-between items-center my-16 lg:my-8 mx-3 md:mx-5 lg:mx-10'>
      {/* Signup*/}
      <div className='font-sans text-gray-300 font-bold text-xl'>
          <Newletter/>
        
        &nbsp; for latest Ingenium Updates
      </div>
      {/* hastag*/}
      <div className="text-gray-300 flex items-center flex-col lg:grid lg:grid-flow-col">
        <div>Follow the event <span className="text-red-500">#feelingenium</span></div>
        <ul>

          <li><img src={insta} alt=""/></li>
        </ul>
      </div>

    </div>
    <div className='w-full h-px bg-gray-900'></div>
    {/* logo and copy right */}
    <div className='grid grid-flow-row justify-center py-16 lg:py-10 lg:grid-flow-col lg:justify-start lg:items-center mx-3 md:mx-5 lg:mx-10'>
      <div className="flex justify-center"><img src={logo_src} alt='' /></div>
      <div className="text-gray-700 text-sm font-sans lg:ml-3">&copy; 2021 Ingenium, Ahmedabad University.</div>
    </div>
  </div>
);

export const Code = () => <code>This is a code block</code>;
export default Footer;