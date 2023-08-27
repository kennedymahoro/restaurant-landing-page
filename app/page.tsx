import Image from 'next/image'
import Food_img from '../public/food-unsplash.jpg'

export default function Home() {
  return (
    <main className="w-screen h-screen flex dark:text-amber-100 overflow-hidden text-lg">
      <div className=" h-screen w-1/2 pl-20 pt-12">
        <nav className="font-light">
          <a href="google.com" className="pr-6">Home</a>
          <a href="google.com" className="border-l-2 border-r-2 border-green-700 px-6" >About us</a>
          <a href="google.com" className="px-6" >Menu</a>
          <a href="google.com" className="border-l-2 border-r-2 border-green-700 px-6" >Contact us</a>
          <a href="google.com" className="pl-6">Gallery</a>
        </nav>
        <h3 className=" w-fit my-14 text-xl">Visit our <span className="font-bold">Food Custody</span></h3>
        <div className="text-3xl w-fit font-bold mb-6">
          <h1>Feels Like a Home,</h1>
          <h1>Tastes Like a Paradise</h1>
        </div>
        <p className="w-2/4 text-xs font-light">Welcome to our Halal Restaurant, where you can indulge in a wide variety of delicious and authentic halal dishes in a warm and welcoming atmosphere. At our restaurant, we believe that food is not just about nourishing the body, but also about feeding the soul. That's why we use only the finest and skilled chefs, to create mouth-watering dishes that are sure to satisfy your cravings.</p>

        <div className=" w-fit mt-6">
          <button type="button" className=" px-6 py-2 bg-green-700 border-2 border-green-700 mr-2 rounded-full"> Order Now</button>
          <button type="button" className=" px-6 py-2 border-green-700 border-2 rounded-full ml-2"> Contact Us</button>
        </div>
        <div className="w-60 text-center mt-24">
          <p>Chatkhil, Noakhali</p>
          <p className="border-t-4">Dine with Food Custody</p>
        </div>
      </div>
      <div className="bg-blue-300 h-screen w-1/2">
        <Image src={Food_img} alt="photo of food" />
      </div>
    </main>
  )
}
