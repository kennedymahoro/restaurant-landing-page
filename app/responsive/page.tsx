'use client'
import {useState}from 'react'
import Image from 'next/image'
import Food_img from '/public/food-unsplash.jpg'
import { IconContext } from 'react-icons'
import {RxHamburgerMenu} from 'react-icons/rx'
import {GrClose} from 'react-icons/gr'

export default function Home() {
  const [isToggled, SetIsToggled] = useState(false)
  const toggled = () => {
    SetIsToggled(!isToggled)
  }
  const Side_bar = () => {
    if(isToggled){
      return(
      <div className='absolute top-0 left-0 w-4/5 h-screen bg-teal-200'>
          <IconContext.Provider value={{className:'fill-white stroke-1 stroke-white'}}>
            <button onClick={toggled} className='absolute top-0 left-0 m-2'><GrClose /></button> 
          </IconContext.Provider>
          <ul className='flex flex-col relative mt-9 ml-4 '>

            <li>
              <a href="google.com" className="">Home</a>
            </li>

            <li>
              <a href="google.com" className="" >About us</a>
            </li>

            <li>
              <a href="google.com" className="" >Menu</a>
            </li>

            <li>
              <a href="google.com" className="" >Contact us</a>
            </li>
            
            <li>
              <a href="google.com" className="">Gallery</a>
            </li>
          </ul>
      </div>
    )
    }
  }

  return (
    <main className="w-screen h-screen flex flex-col overflow-x-hidden text-lg bg-blue-200 sm:flex-row md:bg-red-200">
      <div className=" h-full w-full grid place-items-center md:place-items-start md:pl-20 pt-3 sm:pt-12 sm:w-1/2">

          <button onClick={toggled} className="absolute top-0 left-0 m-2 sm:hidden"><RxHamburgerMenu /></button>
        <Side_bar />
        
        <nav className="font-light invisible absolute top-0 right-0 sm:static">

          <ul className="flex invisible sm:visible">

            <li>
              <a href="google.com" className="pr-6">Home</a>
            </li>

            <li>
              <a href="google.com" className="border-l-2 border-r-2 border-green-700 px-6" >About us</a>
            </li>

            <li>
              <a href="google.com" className="px-6" >Menu</a>
            </li>

            <li>
              <a href="google.com" className="border-l-2 border-r-2 border-green-700 px-6" >Contact us</a>
            </li>
            
            <li>
              <a href="google.com" className="pl-6">Gallery</a>
            </li>
          </ul>
        </nav>

        <h3 className=" w-fit my-5 sm:my-14 text-xl">Visit our <span className="font-bold">Food Custody</span></h3>

        <div className="text-xl md:text-3xl w-fit font-bold mb-6">
          <h1>Feels Like a Home,</h1>
          <h1>Tastes Like a Paradise</h1>
        </div>

        <p className="w-3/4 md:2/4 text-base font-light">Welcome to our Halal Restaurant, where you can indulge in a wide variety of delicious and authentic halal dishes in a warm and welcoming atmosphere. At our restaurant, we believe that food is not just about nourishing the body, but also about feeding the soul. That's why we use only the finest and skilled chefs, to create mouth-watering dishes that are sure to satisfy your cravings.</p>

        <div className=" sm:w-fit mt-6 flex flex-col sm:flex-row">

          <button type="button" className=" mb-4 sm:mb-0 px-6 py-2 bg-green-700 border-2 border-green-700 mr-2 rounded-full"> Order Now</button>
          <button type="button" className=" px-6 py-2 border-green-700 border-2 rounded-full sm:ml-2"> Contact Us</button>
        </div>

        <div className="w-60 text-center my-5 sm:mt-24">
          <p>Chatkhil, Noakhali</p>
          <p className="border-t-4">Dine with Food Custody</p>
        </div>
      </div>

      <div className="md:w-1/2 md:h-auto">
       <Image src={Food_img} alt="photo of food" priority="true" />
      </div>
      
    </main>
  )
}
