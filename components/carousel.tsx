import FilledButton from '../components/filled-button'

export default function Carousel() {
    return (
        <div className="carousel overflow-hidden flex items-center justify-center  h-[409px]">
            <div className="max-w-[1440px] w-[1440px] bg-custom-gradient h-full flex items-center ">
                <div id="slide1" className="carousel-item relative w-full h-full">
                    <div className="w-[764px] flex flex-col justify-center items-center gap-[50px] h-full">
                        <div className="flex flex-col items-center justify-center gap-[30px]">
                            
                            <h1 className='text-4xl'>
                                Идеальный букет за пару секунд!
                            </h1>
                            <p className='text-xl max-w-[491px] text-center'>
                                Пройдите короткий тест и получите персональный букет благодаря AI функции.
                            </p>
                        </div>
                        <FilledButton />
                    </div>
                    <div className="flex h-full">
                    <img src="/1flower.png" alt="" />
                    <img src="/2flower.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
