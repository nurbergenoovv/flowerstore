export default function FlowerCard({ sale, new_flower }: { sale?: boolean, new_flower?: boolean}) {
    return (
        <div className='bg-[#E6E0E9] w-full md:w-[279px] rounded-[8px] relative'>
            {sale && (
                <div className="bg-[#00A51B] py-[3px] px-[10px] md:py-[3.4px] md:px-[17px] flex items-center justify-center max-w-[72px] md:max-w-[92px] rounded-3xl font-semibold text-white absolute right-2 top-2 text-sm md:text-base">
                    Акция
                </div>
            )}
            {new_flower && (
                <div className="bg-[#F9195C] py-[3px] px-[10px] md:py-[3.4px] md:px-[17px] flex items-center justify-center max-w-[72px] md:max-w-[92px] rounded-3xl font-semibold text-white absolute right-2 top-2 text-sm md:text-base">
                    Новинка
                </div>
            )}

            <img src="https://pro-buket.kz/wp-content/uploads/2021/09/%D0%91%D1%83%D0%BA%D0%B5%D1%82-%D0%B8%D0%B7-11-%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D1%8B%D1%85-%D1%80%D0%BE%D0%B7-1-%D0%B2%D0%B8%D0%B4.jpg" alt="" className='w-full h-auto object-cover rounded-t-[8px]' />

            <div className="bottom pt-[18px] pb-[20px] md:pb-[27px] bg-[#F7F5F2] rounded-b-[8px] w-full flex flex-col items-center justify-center px-[10px] md:px-[8.51px]">
                <span className='text-[#251D30] text-[18px] md:text-[20px] font-bold text-center'>Букет Роз</span>
                <span className='text-[#251D30] text-[14px] md:text-[17px] text-center mt-[12px] md:mt-[18px]'>Букет из 9 красных роз и белых роз в фирменной упаковке</span>
                <div className="price w-full flex justify-center mt-[15px] md:mt-[22px] text-[18px] md:text-[20px] gap-[12px] md:gap-[17px] mb-[20px] md:mb-[37px]">
                    <span className='text-[#DD3315]'>12 500₸</span>
                    <span className='text-[#8E8E93] line-through'>22 500₸</span>
                </div>
                <button className='border-[#DD3315] border-[1.5px] md:border-[1.7px] text-[#DD3315] py-[6px] md:py-[8.51px] px-[15px] md:px-[17px] rounded-[8px] hover:bg-[#DD3315] hover:text-white duration-500 text-sm md:text-base'>
                    Добавить в корзину
                </button>
            </div>
        </div>
    )
}