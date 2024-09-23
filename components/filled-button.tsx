export default function FilledButton() {
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-[10px] md:gap-[14px] bg-[#DD3315] px-[16px] py-[10px] md:px-[20px] md:py-[14px] text-white rounded-[7px] hover:bg-[#fc684f] transition-all duration-300"
    >
      <span className="text-[14px] md:text-[16.671px] font-bold">Подобрать букет</span>
      <img
        src="/Star.svg"
        alt="star icon"
        className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
      />
    </button>
  );
}