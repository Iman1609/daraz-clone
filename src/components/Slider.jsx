import { useState, useEffect } from 'react' // Already included
import slide1 from '../assets/slide 1.jpg'
import slide2 from '../assets/slide 2.jpg'
import slide3 from '../assets/slide 3.jpg'
import slide4 from '../assets/slide 4.jpg'
import slide5 from '../assets/slide 5.jpg'
import slide6 from '../assets/slide 6.jpg'
import slide7 from '../assets/slide 7.jpg'
import slide8 from '../assets/slide 8.jpg'
import slide9 from '../assets/slide 9.jpg'
import slide10 from '../assets/slide 10.jpg'
import slide11 from '../assets/slide 11.jpg'
import slide12 from '../assets/slide 12.jpg'
import slide13 from '../assets/slide 13.jpg'
import tryDarazApp from '../assets/try daraz app.png'
import visualSearchIcon from '../assets/visual-search.svg'
import saveCopyIcon from '../assets/save-copy.svg'
import horizontalEllipsisIcon from '../assets/horizontal-ellipsis.svg'

function Slider() {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13]
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [showExtraIcons, setShowExtraIcons] = useState(false)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[344px] max-w-[988px] overflow-hidden">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute w-full h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => { setHoveredIndex(null); setShowExtraIcons(false); }}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              />
              {hoveredIndex === index && (
                <div className="absolute top-2 right-2 opacity-100 transition-opacity duration-300 flex flex-col items-center">
                  <div
                    className="bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100"
                    onMouseEnter={() => setShowExtraIcons(true)}
                  >
                    <img src={visualSearchIcon} alt="Search" className="w-5 h-5" />
                  </div>
                  {showExtraIcons && (
                    <>
                      <div className="bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100 mt-1">
                        <img src={saveCopyIcon} alt="Save" className="w-5 h-5" />
                      </div>
                      <div className="bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100 mt-1">
                        <img src={horizontalEllipsisIcon} alt="Settings" className="w-5 h-5" />
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-2 bg-opacity-50 hover:bg-opacity-75">
          <i className="ri-arrow-left-s-line text-white"></i>
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-2 bg-opacity-50 hover:bg-opacity-75">
          <i className="ri-arrow-right-s-line text-white"></i>
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <input
              key={index}
              type="radio"
              name="slide"
              checked={index === currentSlide}
              onChange={() => setCurrentSlide(index)}
              className="w-3 h-3"
            />
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <img src={tryDarazApp} alt="Try Daraz App" className="h-[344px]" />
      </div>
    </div>
  )
}

export default Slider
