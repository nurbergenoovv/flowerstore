
export default function Header() {
  return (
    <>
      <header className='bg-[#F7F5F2] py-[32px] flex justify-center text-[#251D30]'>
        <div className="max-w-[1399px] min-w-[1399px] px-[35px] flex justify-between items-center ">
          <img src="/Logo.svg" />
          <div className="navs">
            <a href="" className="font-normal text-xl mr-[35px] hover:underline transition-all duration-200">О нас</a>
            <a href="" className="font-normal text-xl hover:underline transition-all duration-200">Контакты</a>
          </div>
          <div className="flex flex-col items-center gap-0">
            <span className="text-[16.8px]">Связаться а нами</span>
            <a href="tel:+7 700 000 00 00" className="font-bold text-xl">+7 700 000 00 00</a>
          </div>
          <div className="flex flex-row items-center justify-center">
            <a href="" className="con flex flex-col items-center mr-[28px]  hover:underline transition-all duration-200">
              <img src="/SearchIcon.svg" />
              <span className="text-sm font-normal">Поиск</span>
            </a>
            <a href="" className="con flex flex-col items-center mr-[28px]  hover:underline transition-all duration-200">
              <img src="/BasketIcon.svg" />
              <span className="text-sm font-normal">Корзина</span>
            </a>
            <a href="" className="con flex flex-col items-center mr-[28px]  hover:underline transition-all duration-200">
              <img src="/AccountIcon.svg" />
              <span className="text-sm font-normal">Корзина</span>
            </a>

          </div>
        </div>
      </header>
      <div className="flex justify-center w-full bg-white ">
        <div className="under-header py-[33px] px-[50px] flex justify-between text-[#251D30]  max-w-[1399px] min-w-[1399px]">
          <a href="" className="hover:bg-gray-200 transition-all duration-200 p-1 rounded-md">По цветам</a>
          <a href="" className="hover:bg-gray-200 transition-all duration-200 p-1 rounded-md">По ценам</a>
          <a href="" className="hover:bg-gray-200 transition-all duration-200 p-1 rounded-md">По случаю</a>
          <a href="" className="hover:bg-gray-200 transition-all duration-200 p-1 rounded-md">Популярное</a>
          <a href="" className="hover:bg-gray-200 transition-all duration-200 p-1 rounded-md">Весь каталог</a>
        </div>
      </div>
    </>
  )
}
