import React from 'react'
import footerLogo from '../assets/footer logo.png'
import appStore from '../assets/app store 2.png'
import googlePlay from '../assets/google play 2.png'
import appGallery from '../assets/app gallery.png'
import cashOnDelivery from '../assets/cash on deliverry.png'
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import easypaisa from '../assets/easypaisa.png'
import darazWallet from '../assets/daraz wallet.png'
import jazzcash from '../assets/jazzcash.png'
import unionPay from '../assets/union pay.png'
import hbl from '../assets/hbl.png'
import easyInstallments from '../assets/easy installments.png'
import pcidss from '../assets/pcidss.png'
import pakistan from '../assets/pakistan.png'
import bangladesh from '../assets/bangladesh.png'
import sriLanka from '../assets/sri-lanka.png'
import myanmar from '../assets/maynmar.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/insta.png'
import youtube from '../assets/youtube.png'
import browser from '../assets/browser.png'

function Footer() {
  return (
    <div className="my-8 px-4">
      {/* Customer Care, Daraz, and Download App Section */}
      <div className="mx-0 md:mx-[5%] grid grid-cols-2 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-blue-950 text-sm mb-6">Customer Care</h3>
          <ul className="space-y-1 text-sm text-blue-950">
            {[
              'Help Center',
              'How to Buy',
              'Corporate & Bulk Purchasing',
              'Returns & Refunds',
              'Daraz Shop',
              'Contact Us',
              'Purchase Protection',
              'Daraz Pick Up Points',
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-blue-950 text-sm mb-2">Daraz</h3>
          <ul className="space-y-1 text-sm text-blue-950">
            {[
              'About Us',
              'Digital Payments',
              'Daraz Donates',
              'Daraz Blog',
              'Terms & Conditions',
              'Privacy Policy',
              'NTN: 4012116',
              'Online Shopping App',
              'Daraz Exclusive',
              'Daraz University',
              'Sell on Daraz',
              'Join Daraz Affiliate Program',
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <img src={footerLogo} alt="Happy Shopping" className="w-10 mb-2" />
          <p className="text-sm text-gray-600 mb-2">Download App</p>
          <div className="flex space-x-2">
            <a href="#"><img src={appStore} alt="App Store" className="w-20" /></a>
            <a href="#"><img src={googlePlay} alt="Google Play" className="w-20" /></a>
            <a href="#"><img src={appGallery} alt="App Gallery" className="w-20" /></a>
          </div>
        </div>
      </div>

      {/* Payment Methods and Verified By Section */}
      <div className="bg-white h-auto my-8 px-4 grid grid-cols-2 md:grid-cols-2 gap-8 py-4">
        <div className="mx-0 md:mx-[5%]">
          <h3 className="text-lg text-gray-700 mb-2">Payment Methods</h3>
          <div className="flex flex-wrap items-center space-x-2">
            <img src={cashOnDelivery} alt="Cash on Delivery" className="h-8" />
            <img src={visa} alt="Visa" className="h-6" />
            <img src={mastercard} alt="Mastercard" className="h-8" />
            <img src={easypaisa} alt="Easypaisa" className="h-8" />
            <img src={darazWallet} alt="Daraz Wallet" className="h-8" />
            <img src={jazzcash} alt="Jazzcash" className="h-8" />
            <img src={unionPay} alt="Union Pay" className="h-8" />
            <img src={hbl} alt="HBL" className="h-6" />
            <img src={easyInstallments} alt="Easy Installments" className="h-8" />
          </div>
        </div>
        <div>
          <h3 className="text-lg text-gray-700 mb-2">Verified By</h3>
          <div className="flex flex-wrap items-center space-x-4">
            <img src={pcidss} alt="PCI DSS" className="h-8" />
          </div>
        </div>
      </div>

      {/* How Daraz Transformed Online Shopping in Pakistan Section */}
      <div className="hidden md:block mx-auto my-8 px-4">
        <h2 className="text-gray-600 font-bold mb-4">How Daraz Transformed Online<br /> Shopping in Pakistan</h2>
        <div className="grid grid-cols-4 gap-8 text-sm text-gray-600 leading-relaxed">
          <div>
            <p>
              Daraz first made waves in Pakistan’s e-commerce market after its introduction in 2012. We have since grown to become Pakistan’s largest platform for online shopping with a network spread across Asia in Pakistan, Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. Our vision was to provide a safe, efficient online marketplace platform for vendors and customers across the country to come together. We started off exclusively as an online fashion retail platform and over the years expanded to become a complete one-stop solution for all your buying needs. Daraz prides itself on not being just another ecommerce venture in Asia. We work tirelessly to make sure that we provide users with the best online shopping experience and value for their purchases. Whether you shop online through our website or our online shopping mobile App, you can expect easy navigation, customized recommendations, and a smooth online shopping experience guaranteed.
            </p>
          </div>
          <div>
            <p>
              Shop from Verified Vendors<br />
              Daraz understands that online shopping in Pakistan comes with its fair share of risks. This is why with Daraz Marketplace and Daraz Mall customers have the security of choosing from verified vendors and brands from Karachi, Lahore, Islamabad and all across Pakistan. Now you’ll never have to second guess authenticity because Daraz makes sure to do it for you!<br />
              Shop Around the World with Daraz Global Collection<br />
              International sellers and local convenience come together with Daraz Global collection. Get the chance to shop online from vendors around the world without leaving the Daraz website. Featuring thousands of novelty gadgets and accessories, Daraz Global Collection offers you a selection of products that you won’t find anywhere else when you’re online shopping in Pakistan.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Top Categories & Brands</h3>
            <p>
              MOBILE PHONES IN PAKISTAN<br />
              Apple iPhones, Honor Mobiles, Huawei Mobiles, Tecno Mobiles, Redmi Mobiles, Xiaomi Mi Mobiles, Nokia Mobiles, OnePlus Mobiles, Oppo Mobile Phones, Realme Mobiles, Samsung Mobile Phones, Vivo Mobile Phones, Mobile Accessories, Smart Watches<br />
              LATEST LAPTOPS<br />
              Dell Laptops, HP Laptops, Lenovo Laptops, Mouse, Gaming Graphic Cards, Lenovo Ideapad 3, Macbook Pro 13, HP Probook 650 G2<br />
              LED TV<br />
              Changhong Led Tv, LG Led Tv, Samsung Led Tv, Sony Led Tv, TCL LED TVs<br />
              HOME APPLIANCES<br />
              Microwave oven, Geyser, Heater, Refrigerators, Deep Freezers, Generators, Water Dispensers, Fans, Room Cooler, Table Fans, Wall Fans, Exhaust Fans, Pedestal Fans, Window Ac, Solar Panel, Washing Machine<br />
              DSLR CAMERAS<br />
              Camera Tripods, Drones, IP & CCTV Cameras, Nikon D7000, Nikon D5600, Canon 200D, Canon 1200D, Fujifilm Instax Mini 11, Canon M50
            </p>
          </div>
          <div>
            <p>
              WOMEN'S FASHION<br />
              Al-Karam Studio, Warda, Salitex, Bonanza Satrangi, Edenrobe, Firdous, Junaid Jamshed, Limelight, Sana Safinaz, Mahru, Pushup Bra, Women Undergarments<br />
              MEN'S FASHION<br />
              Men's Shirts, Men's T-Shirts<br />
              ONLINE GROCERY STORE<br />
              Oil & Ghee, Basmati Rice, Dried Fruits, Chocolates, Mattresses<br />
              ONLINE BOOK STORE<br />
              English Books, Islamic Books, History Books, English Literature Books, Kids Urdu Stories, Pride & Prejudice, Harry Potter Story Books, Namal Novel, Nimra Ahmed Novels<br />
              USED CARS FOR SALE<br />
              Suzuki Wagon R, KIA Sportage, Honda City, Toyota Prado, Suzuki Alto, Suzuki Cultus, Honda Civic, Honda 125, Honda 70, Yamaha Ybr 125, Hi Speed 150, Hi Speed Freedom 200, Metro 70, Super Power 125, Monster JMS 3500 Electric Bike, Super Power 70, Car Accessories
            </p>
          </div>
        </div>
      </div>

      {/* Daraz International and Follow Us Section */}
      <div className="bg-white w-full my-auto px-auto">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-2 gap-4 justify-items-center items-center py-8">
          <div>
            <h3 className="text-sm text-gray-600 mb-2">Daraz International</h3>
            <div className="flex flex-wrap items-center">
              {[
                { img: pakistan, name: 'Pakistan' },
                { img: bangladesh, name: 'Bangladesh' },
                { img: sriLanka, name: 'SriLanka' },
                { img: myanmar, name: 'Myanmar' },
              ].map((country) => (
                <div key={country.name} className="flex items-center mr-2">
                  <img src={country.img} alt={country.name} className="h-6" />
                  <p className="text-xs text-gray-600 ml-1">{country.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs text-gray-600 mb-2">Follow Us</h3>
            <div className="flex flex-nowrap items-center space-x-4">
              {[
                { img: facebook, name: 'Facebook' },
                { img: twitter, name: 'Twitter' },
                { img: instagram, name: 'Instagram' },
                { img: youtube, name: 'YouTube' },
                { img: browser, name: 'Website' },
              ].map((social) => (
                <img key={social.name} src={social.img} alt={social.name} className="h-4 md:h-6" />
              ))}
            </div>
          </div>
          <div className="col-span-full text-center">
            <p className="text-sm text-gray-600">© Daraz 2026</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer