import React from 'react'

function SideNav() {
  const navItems = [
    { icon: 'ri-arrow-up-s-line', label: 'Top' },
    { icon: 'ri-fire-line', label: 'Flash Sale' },
    { icon: 'ri-grid-fill', label: 'Categories' },
    { icon: 'ri-user-star-line', label: 'Just for You' },
  ]

  const handleScroll = (label) => {
    const sectionId = label.toLowerCase().replace(/\s+/g, '-')
    const section = document.getElementById(sectionId) || (sectionId === 'top' ? document.body : null)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed bottom-4 left-0 flex flex-col items-end space-y-4 bg-gray-100 p-2 shadow-lg rounded-r-lg z-10">
      {navItems.map(({ icon, label }) => (
        <button
          key={label}
          onClick={() => handleScroll(label)}
          className="group relative flex items-center justify-center w-10 h-10 hover:bg-orange-600 focus:outline-none"
        >
          <i className={`${icon} text-gray-400 group-hover:text-white`}></i>
          <span className="absolute left-full ml-2 text-orange-600 opacity-0 group-hover:opacity-100 whitespace-nowrap">
            {label}
          </span>
        </button>
      ))}
    </nav>
  )
}

export default SideNav