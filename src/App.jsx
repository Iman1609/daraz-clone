import Header from './components/Header'
import SideNav from './components/SideNav'
import Slider from './components/Slider'
import AdSection from './components/AdSection'
import FlashSale from './components/FlashSale'
import Categories from './components/Categories'
import JustForYou from './components/JustForYou'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-roboto min-h-screen bg-[#F5F5F5] bg-cover bg-center">
      <div className="fixed inset-0 bg-[#F5F5F5] z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <Header />
        <SideNav />
        <main className="pt-36 px-4">
          <Slider />
          <AdSection />
          <FlashSale />
          <Categories />
          <JustForYou />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App