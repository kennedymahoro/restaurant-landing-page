import Image from 'next/image'
import Food_img from '../public/food-unsplash.jpg'

export default function Home() {
  return (
    <main className="w-screen h-screen flex">
      <div className=" bg-green-100 h-screen w-1/2 grid place-items-center">
        <nav >
          <a href="google.com">Home</a>
          <a href="google.com" className="border-l-2 border-r-2 border-green-700" >About us</a>
          <a href="google.com"  >Menu</a>
          <a href="google.com"  className="border-l-2 border-r-2 border-green-700" >Contact us</a>
          <a href="google.com">Gallery</a>
        </nav>
      </div>
      <div className="bg-blue-300 h-screen w-1/2">
        <Image src={Food_img} alt="photo of food" />
      </div>
    </main>
  )
}
