
export default function FlowerCard({ sale, new_flower }: { sale?: boolean, new_flower?: boolean}) {
    return (
        <div className='bg-[#E6E0E9] w-[279px] rounded-[8px] relative'>
            {sale && (
                <div className="bg-[#00A51B] py-[3.4px] px-[17px] flex items-center justify-center max-w-[92px] rounded-3xl font-semibold text-white absolute right-2 top-2">
                    Акция
                </div>
            )}
            {new_flower && (
                <div className="bg-[#F9195C] py-[3.4px] px-[17px] flex items-center justify-center max-w-[92px] rounded-3xl font-semibold text-white absolute right-2 top-2">
                    Новинка
                </div>
            )}

            <img src="" alt="" className='max-h-[239px] h-[239px]' />

            <div className="bottom pt-[18px] pb-[27px] bg-[#F7F5F2] rounded-b-[8px] w-full flex flex-col items-center justify-center px-[8.51px]">
                <span className='text-[#251D30] text-[20px] font-bold'>Букет Роз</span>
                <span className='text-[#251D30] text-[17px] text-center mt-[18px]'>Букет из 9 красных роз и белых роз в фирменной упаковке</span>
                <div className="price w-full flex justify-center mt-[22px] text-[20px] gap-[17px] mb-[37px]">
                    <span className='text-[#DD3315]'>12 500₸</span>
                    <span className='text-[#8E8E93] line-through'>22 500₸</span>
                </div>
                <button className='border-[#DD3315] border-[1.7px]  text-[#DD3315] py-[8.51px] px-[17px] rounded-[8px] hover:bg-[#DD3315] hover:text-white duration-500'>
                    Добавить в корзину
                </button>
            </div>
        </div>
    )
}
