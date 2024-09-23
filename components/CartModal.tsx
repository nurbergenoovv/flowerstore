import { X } from 'lucide-react';
import React from 'react';

interface CartItem {
  name: string;
  price: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  setCartItems: (items: CartItem[]) => void;
  cartItems: CartItem[];
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, setCartItems, cartItems }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-md mx-auto p-6 rounded-lg">
        <button onClick={onClose} className="float-right mb-4">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Корзина</h2>
        {cartItems.length > 0 ? (
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>{item.price}₸</span>
              </li>
            ))}
            <p
              onClick={() => setCartItems([])}
              className="w-full text-center py-2 border-2 border-black rounded-lg font-semibold hover:bg-black hover:text-white duration-300 cursor-pointer"
            >
              Очистить корзину
            </p>
          </ul>
        ) : (
          <p>Ваша корзина пуста.</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;