import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
import c4 from '../assets/c4.jpg'
import c5 from '../assets/c5.jpg'
import c6 from '../assets/c6.jpg'
import c7 from '../assets/c7.jpg'
import c8 from '../assets/c8.jpg'
import c9 from '../assets/c9.png'
import c10 from '../assets/c10.jpg'
import c11 from '../assets/c11.jpg'
import c12 from '../assets/c12.jpg'
import c13 from '../assets/c13.jpg'
import c14 from '../assets/c14.jpg'
import c15 from '../assets/c15.jpg'
import c16 from '../assets/c16.jpg'

function Categories() {
  const categories = [
    { img: c1, name: 'Cleaning Products' },
    { img: c2, name: 'Towel Rails\n& Warmers' },
    { img: c3, name: 'Building Blocks\n& Toys' },
    { img: c4, name: 'Dining Sets' },
    { img: c5, name: 'Pet Beds' },
    { img: c6, name: 'Kids Learning' },
    { img: c7, name: 'Knife Sharpeners' },
    { img: c8, name: 'Pillow Covers' },
    { img: c9, name: 'Tablet' },
    { img: c10, name: 'Table Lamp' },
    { img: c11, name: 'School Bags' },
    { img: c12, name: 'Skincare' },
    { img: c13, name: 'Sunglasses' },
    { img: c14, name: 'Starter Kits' },
    { img: c15, name: 'Tote Bags' },
    { img: c16, name: 'Winter Jackets' },
  ]

  return (
    <div className="flex flex-col mx-0 md:mx-[5%] mt-4" id="categories">
      <h1 className="text-2xl text-gray-700 mb-2">Categories</h1>
      <div className="bg-white h-auto w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4 p-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`bg-white h-36 w-full flex flex-col items-center justify-center hover:cursor-pointer hover:shadow-lg ${index < 15 ? 'border-b border-r border-gray-200' : 'border-r border-gray-200'} ${index === 15 ? 'hidden md:block' : ''}`}
          >
            <img src={category.img} alt={category.name} className="h-20 mb-2 object-cover" />
            <p className="text-sm text-gray-500 font-bold text-center whitespace-pre">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories