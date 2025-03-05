import { useState } from 'react' // Added import
import f1 from '../assets/F1.jpg'
import f2 from '../assets/F2.jpg'
import f3 from '../assets/F3.jpg'
import f4 from '../assets/F4.jpg'
import f5 from '../assets/F5.jpg'
import f6 from '../assets/F6.png'
import visualSearchIcon from '../assets/visual-search.svg'
import saveCopyIcon from '../assets/save-copy.svg'
import horizontalEllipsisIcon from '../assets/horizontal-ellipsis.svg'

function FlashSale() {
  const products = [
    { img: f1, name: 'M19 Airpods TWS\nBluetooth Earphones', price: '₨848', original: '₨4,000', discount: '-79%' },
    { img: f2, name: 'b2 PC Unstitched Suit\nFor Women/Girls...', price: '₨1,750', original: '₨2,450', discount: '-28%' },
    { img: f3, name: 'for heatless curls\ncurler bands...', price: '₨176', original: '₨299', discount: '-29%' },
    { img: f4, name: 'Wall Paper\nHeat Resistant...', price: '₨296', original: '₨650', discount: '-54%' },
    { img: f5, name: 'P47 Wireless Headset\nBluetooth Headphone', price: '₨839', original: '₨1,500', discount: '-44%' },
    { img: f6, name: 'Closet Organizer Bag\nWater-resistant...', price: '₨176', original: '₨299', discount: '-41%' },
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [showExtraIcons, setShowExtraIcons] = useState(false)

  return (
    <div className="flex flex-col mx-0 md:mx-[5%] mt-4" id="flash-sale">
      <h1 className="text-2xl text-gray-700 mb-2">Flash Sale</h1>
      <div className="bg-white flex justify-between items-center h-16 w-full border-b border-gray-300">
        <p className="text-orange-500 text-sm font-bold ml-4">On Sale Now</p>
        <button className="text-orange-500 font-bold border h-9 px-2 text-sm mr-4 hover:bg-orange-50">SHOP ALL PRODUCTS</button>
      </div>
      <div className="bg-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mx-auto md:mx-auto overflow-x-auto p-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white h-72 p-2 flex flex-col hover:cursor-pointer hover:shadow-lg relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => { setHoveredIndex(null); setShowExtraIcons(false); }}
          >
            <img src={product.img} alt={product.name} className="h-44 object-cover" />
            <h1 className="text-black ml-2 text-sm whitespace-pre">{product.name}</h1>
            <p className="text-orange-500 text-lg ml-2 font-bold">{product.price}</p>
            <pre className="ml-2"><span className="text-gray-400 line-through text-xs">{product.original}</span> {product.discount}</pre>
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
    </div>
  )
}

export default FlashSale