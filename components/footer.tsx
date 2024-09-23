
import { Instagram, Facebook, Send } from 'lucide-react'

export default function Component() {
  return (
    <footer className="bg-[#f5e5b8] p-6 md:p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-3xl font-bold mb-4 md:mb-0">Logo</div>
          <div className="flex space-x-4">
            <a href="#" className="bg-white p-2 rounded-full">
              <Instagram className="w-6 h-6 text-[#e4405f]" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full">
              <Facebook className="w-6 h-6 text-[#3b5998]" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full">
              <Send className="w-6 h-6 text-[#0088cc]" />
            </a>
          </div>
        </div>

        <div className="text-center mb-6">
          <a href="#" className="text-gray-700 hover:underline">
            Политика конфиденциальности
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-gray-700 hover:underline">
            Условия использования
          </a>
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Адрес:</span> г. Алматы, Примерный район, ул. Пример, д. 10А
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Номер телефона:</span> +7 700 000 00 00
          </p>
        </div>

        <div className="text-center text-sm text-gray-600">
          2021 - 2024 | Example name | Все права защищены
        </div>
      </div>
    </footer>
  )
}
