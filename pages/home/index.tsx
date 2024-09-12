import Header from '../../components/header'
import Carousel from '../../components/carousel'
import PopularList from '../../components/popularList'

export default function Home() {
  return (
    <>
      <Header />
      <main className='w-screen flex flex-col justify-center items-center'>
        <div className="wrapper  max-w-[1440px]">
          <Carousel />
          <PopularList />
        </div>
      </main>
    </>
  )
}
