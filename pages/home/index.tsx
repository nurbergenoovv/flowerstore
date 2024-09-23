import Header from '../../components/header'
import BouquetComponent from '../../components/carousel'
import PopularList from '../../components/popularList'
import Footer from '../../components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className='w-screen flex flex-col justify-center items-center'>
        <div className="wrapper  max-w-[1440px] w-full">
          <BouquetComponent />
          <PopularList />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
