import { useState } from 'react';
import FlowerCard from './flower-card';
import FilterModal from './filter-modal.tsx'; 

export default function PopularList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[50px] lg:px-[101px] py-[46px]">
      <h3 className="text-[#251D30] text-center text-[28px] md:text-[36px] lg:text-[40px] mb-[40px]">Популярные букеты</h3>
      
      <div className="flex justify-center mb-[40px]">
        <button onClick={handleModalOpen} className="bg-[#DD3315] text-white px-4 py-2 rounded-md hover:bg-[#fc684f] transition-all">
          Фильтры
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] md:gap-x-[40px] gap-y-[30px] md:gap-y-[45px]">
        <FlowerCard sale />
        <FlowerCard new_flower />
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

      {isModalOpen && <FilterModal onClose={handleModalClose} />}
    </div>
  );
}