import { useState, useEffect } from 'react'
import logo from '../assets/logo2.png' // Imported image

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`bg-[#F85606] h-[120px] p-2 md:p-4 fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <nav className="text-white text-xs md:text-sm overflow-x-auto flex whitespace-nowrap justify-center md:justify-end gap-4 mr-[5%]">
        {['SAVE ON MORE APP', 'SELL ON DARAZ', 'HELP & SUPPORT', 'LOGIN', 'SIGN UP', 'زبان تبدیل کریں'].map((item) => (
          <p key={item} className="hover:opacity-80 cursor-pointer">{item}</p>
        ))}
      </nav>
      <div className="flex items-center ml-[5%] mt-[1rem]">
        <img src={logo} alt="Daraz Logo" className="h-[40px] w-[120px]" />
        <div className="flex justify-between items-center w-full md:w-[688px] h-[45px] bg-white rounded-md overflow-hidden ml-[30px]">
          <input type="text" placeholder="Search in Daraz" className="bg-white flex-grow h-full w-full pl-[1rem] outline-none" />
          <button className="bg-[#FFE1D2] h-full w-[45px] text-[#F85606] text-[1.2rem] hover:cursor-pointer">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <i className="ri-shopping-cart-line fa-2x text-white ml-[40px]"></i> {/* Remix Icon */}
      </div>
    </header>
  )
}

export default Header