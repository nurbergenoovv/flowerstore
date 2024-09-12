import FilterButton from './filter-button'
import FlowerCard from './flower-card'
export default function PopularList() {
  return (
    <div className="max-w-[1440px] ">
      <div className="py-[46px] px-[101px]">
        <h3 className="text-[#251D30] w-full text-center text-[40px] mb-[50px]">Популярные букеты</h3>
        <FilterButton />

        <div className="mt-[50px] flex flex-wrap gap-x-[40px] gap-y-[45px]">
          <FlowerCard sale/>
          <FlowerCard new_flower/>
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
        </div>
      </div>
    </div>
  )
}
