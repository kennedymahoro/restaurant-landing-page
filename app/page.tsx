import Image from 'next/image'
import Food_img from '../public/food-unsplash.jpg'

export default function Home() {
  return (
    <main className="w-screen h-screen flex dark:text-black">
      <div className=" bg-green-100 h-screen w-1/2 grid place-items-center">
        <nav >
          <a href="google.com">Home</a>
          <a href="google.com" className="border-l-2 border-r-2 border-green-700" >About us</a>
          <a href="google.com"  >Menu</a>
          <a href="google.com"  className="border-l-2 border-r-2 border-green-700" >Contact us</a>
          <a href="google.com">Gallery</a>
        </nav>
        <h3>Visit our <b>Food Custody</b></h3>
        <div>
          <h1>Feels Like a Home,</h1>
          <h1>Tastes Like a Paradise</h1>
        </div>
        <p>Welcome to our Halal Restaurant, where you can indulge in a wide variety of delicious and authentic halal dishes in a warm and welcoming atmosphere. At our restaurant, we believe that food is not just about nourishing the body, but also about feeding the soul. That's why we use only the finest and skilled chefs, to create mouth-watering dishes that are sure to satisfy your cravings.</p>

        <div>
          <button type="button" className=" px-6 py-2 bg-green-700 border-2 border-green-700 mr-2 rounded-full"> Order Now</button>
          <button type="button" className=" px-6 py-2 border-green-700 border-2 rounded-full ml-2"> Contact Us</button>
        </div>
      </div>
      <div className="bg-blue-300 h-screen w-1/2">
        <Image src={Food_img} alt="photo of food" />
      </div>
    </main>
  )
}
