import { useState } from 'react' // Already included
import p1 from '../assets/p1.webp'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.webp'
import p4 from '../assets/p4.webp'
import p5 from '../assets/p5.webp'
import p6 from '../assets/p6.jpg'
import p7 from '../assets/p7.webp'
import p8 from '../assets/p8.jpg'
import p9 from '../assets/p9.webp'
import p10 from '../assets/p10.webp'
import p11 from '../assets/p11.webp'
import p12 from '../assets/p12.webp'
import p13 from '../assets/p13.webp'
import p14 from '../assets/p14.webp'
import p15 from '../assets/p15.webp'
import p16 from '../assets/p16.webp'
import p17 from '../assets/p17.webp'
import p18 from '../assets/p18.webp'
import p19 from '../assets/p19.webp'
import p20 from '../assets/p20.webp'
import p21 from '../assets/p21.webp'
import p22 from '../assets/p22.webp'
import p23 from '../assets/p23.webp'
import p24 from '../assets/p24.webp'
import p25 from '../assets/p25.webp'
import p26 from '../assets/p26.webp'
import p27 from '../assets/p27.webp'
import p28 from '../assets/p28.webp'
import p29 from '../assets/p29.webp'
import p30 from '../assets/p30.webp'
import p31 from '../assets/p31.webp'
import p32 from '../assets/p32.webp'
import p33 from '../assets/p33.webp'
import p34 from '../assets/p34.webp'
import p35 from '../assets/p35.webp'
import p36 from '../assets/p2p30.webp'
import visualSearchIcon from '../assets/visual-search.svg'
import saveCopyIcon from '../assets/save-copy.svg'
import horizontalEllipsisIcon from '../assets/horizontal-ellipsis.svg'

function JustForYou() {
  const products = [
    { img: p1, name: 'TWS Airpods, with Super Bass', price: 'Rs. 799', rating: '★★★★☆', reviews: 102 },
    { img: p2, name: 'GULPATONE Extreme Serum', price: 'Rs. 1,299', rating: '★★★★☆', reviews: 56 },
    { img: p3, name: 'New Style Flip Flops', price: 'Rs. 499', rating: '★★★★☆', reviews: 89 },
    { img: p4, name: 'Bluetooth Earbuds', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 220 },
    { img: p5, name: 'Original Vintage T9', price: 'Rs. 2,299', rating: '★★★★★', reviews: 78 },
    { img: p6, name: 'Moisturizing Socks', price: 'Rs. 399', rating: '★★★★☆', reviews: 45 },
    { img: p7, name: 'Mini Sim Smart Wallet', price: 'Rs. 1,499', rating: '★★★★☆', reviews: 61 },
    { img: p8, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p9, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p10, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p11, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p12, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p13, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p14, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p15, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p16, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p17, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p18, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p19, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p20, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p21, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p22, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p23, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p24, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p25, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p26, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p27, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p28, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p29, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p30, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p31, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p32, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p33, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p34, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p35, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
    { img: p36, name: 'Wireless Headphones', price: 'Rs. 1,999', rating: '★★★☆☆', reviews: 140 },
  ]

  const [visibleProducts, setVisibleProducts] = useState(12)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [showExtraIcons, setShowExtraIcons] = useState(false)

  const loadMore = () => setVisibleProducts((prev) => prev + 12)

  return (
    <div className="flex flex-col mx-0 md:mx-[5%] mt-4 mb-8" id="just-for-you">
      <h2 className="text-2xl text-gray-700 mb-4">Just For You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full overflow-x-auto">
        {products.slice(0, visibleProducts).map((product, index) => (
          <div
            key={index}
            className="bg-white p-2 hover:shadow-md transition shadow-sm relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => { setHoveredIndex(null); setShowExtraIcons(false); }}
          >
            <img src={product.img} alt={product.name} className="w-full h-36 object-cover mb-2" />
            <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
            <p className="text-orange-500 font-bold">{product.price}</p>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <span className="text-yellow-400 mr-1">{product.rating}</span> ({product.reviews})
            </div>
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
      {visibleProducts < products.length && (
        <button onClick={loadMore} className="block mx-auto mt-6 px-6 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold border border-gray-300">
          LOAD MORE
        </button>
      )}
    </div>
  )
}

export default JustForYou