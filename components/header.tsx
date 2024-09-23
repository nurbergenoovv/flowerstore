import { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import CartModal from './CartModal'; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { name: 'Букет Роз', price: 5000 },
    { name: 'Тюльпаны', price: 3500 },
    { name: 'Букет Роз', price: 5000 },
    { name: 'Тюльпаны', price: 3500 },
    { name: 'Букет Роз', price: 5000 },
    { name: 'Тюльпаны', price: 3500 },
    { name: 'Букет Роз', price: 5000 },
    { name: 'Тюльпаны', price: 3500 },
    { name: 'Букет Роз', price: 5000 },
    { name: 'Тюльпаны', price: 3500 }
  ]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCartModal = () => {
    setCartModalOpen(!cartModalOpen);
  };

  return (
    <>
      <header className='bg-[#F7F5F2] py-[16px] md:py-[32px] flex justify-center text-[#251D30]'>
        <div className="max-w-full md:max-w-[1399px] w-full px-[20px] md:px-[35px] flex justify-between items-center">
          <img src="/Logo.svg" className="w-[100px] md:w-auto" alt="Logo" />
          <div className="hidden md:flex">
            <a href="" className="font-normal text-base md:text-xl mr-[20px] md:mr-[35px] hover:underline transition-all duration-200">О нас</a>
            <a href="" className="font-normal text-base md:text-xl hover:underline transition-all duration-200">Контакты</a>
          </div>
          <div className="flex flex-col items-center gap-0">
            <span className="text-sm md:text-[16.8px]">Связаться с нами</span>
            <a href="tel:+7 700 000 00 00" className="font-bold text-base md:text-xl">+7 700 000 00 00</a>
          </div>
          <div className="hidden md:flex flex-row items-center justify-center">
            <a href="" className="con flex flex-col items-center mr-[15px] md:mr-[28px] hover:underline transition-all duration-200">
              <Search className="w-[20px] md:w-auto" />
              <span className="text-xs md:text-sm font-normal">Поиск</span>
            </a>
            <button onClick={toggleCartModal} className="con flex flex-col items-center mr-[15px] md:mr-[28px] hover:underline transition-all duration-200">
              <ShoppingCart className="w-[20px] md:w-auto" />
              <span className="text-xs md:text-sm font-normal">Корзина</span>
            </button>
            <a href="" className="con flex flex-col items-center hover:underline transition-all duration-200">
              <User className="w-[20px] md:w-auto" />
              <span className="text-xs md:text-sm font-normal">Аккаунт</span>
            </a>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="bg-white w-64 h-full absolute right-0 top-0 p-5 flex flex-col">
            <button onClick={toggleMenu} className="self-end mb-4">
              <X className="w-6 h-6" />
            </button>
            <a href="" className="mb-4 text-lg hover:underline">О нас</a>
            <a href="" className="mb-4 text-lg hover:underline">Контакты</a>
            <a href="" className="mb-4 text-lg hover:underline">Поиск</a>
            <a href="" className="mb-4 text-lg hover:underline">Корзина</a>
            <a href="" className="mb-4 text-lg hover:underline">Аккаунт</a>
          </div>
        </div>
      )}

      <div className="flex justify-center w-full bg-white">
        <div className="under-header py-[16px] md:py-[33px] px-[20px] md:px-[50px] flex flex-wrap justify-between text-[#251D30] max-w-full md:max-w-[1399px] w-full">
          <a href="" className="hover:bg-gray-200 transition-all duration-200 p-1 rounded-md text-sm md:text-base">По цветам</a>
          <a href="" className="hover:bg-gray-200 transition-all duration-200 p-1 rounded-md text-sm md:text-base">По ценам</a>
          <a href="" className="hover:bg-gray-200 transition-all duration-200 p-1 rounded-md text-sm md:text-base">По случаю</a>
          <a href="" className="hover:bg-gray-200 transition-all duration-200 p-1 rounded-md text-sm md:text-base">Популярное</a>
          <a href="" className="hover:bg-gray-200 transition-all duration-200 p-1 rounded-md text-sm md:text-base">Весь каталог</a>
        </div>
      </div>

      <CartModal isOpen={cartModalOpen} onClose={toggleCartModal} cartItems={cartItems} setCartItems={()=>{
        setCartItems
      }} />
    </>
  );
}