export default function FilterModal({ onClose }) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-[500px] p-8 rounded-lg shadow-lg relative">
          {/* Close button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-black font-bold text-xl hover:text-red-500"
          >
            &times;
          </button>
  
          {/* Filter form */}
          <h2 className="text-2xl font-bold mb-6 text-center">Фильтры</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Цена</label>
              <input 
                type="range" 
                min="0" 
                max="10000" 
                className="w-full"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Категория</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Розы</option>
                <option>Тюльпаны</option>
                <option>Лилии</option>
                <option>Микс</option>
              </select>
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Цвет</label>
              <div className="flex gap-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Красный
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Белый
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Жёлтый
                </label>
              </div>
            </div>
  
            <button
              type="submit"
              className="w-full bg-[#DD3315] text-white py-2 rounded-md hover:bg-[#fc684f] transition-all"
            >
              Применить фильтры
            </button>
          </form>
        </div>
      </div>
    );
  }