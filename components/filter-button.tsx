
export default function FilterButton() {
  return (
    <button className='flex items-center justify-center gap-[9px] border-2 border-black rounded-[3px] px-[14px] py-[10px] hover:bg-gray-100 duration-300'>
        <img src="filterIcon.svg" alt=""/>
        <span className='text-[22px] text-[#251D30]'>Фильтры</span>
    </button>
  )
}
