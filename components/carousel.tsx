import FilledButton from '../components/filled-button';

const BouquetComponent = () => {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-orange-100 min-h-screen py-10 px-5 max-w-full w-full flex items-center justify-center ">
      <div className="text-center space-y-4 w-1/2 items-center justify-center">
        <h1 className="max-w-screen w-full text-2xl md:text-4xl font-semibold text-gray-800">
          Идеальный букет за пару секунд!
        </h1>
        <p className="max-w-full w-full text-sm md:text-lg text-gray-600">
          Пройдите <span className="font-semibold">короткий</span> тест и получите персональный букет благодаря <span className="font-semibold">AI</span> функции.
        </p>
        <div className="w-full flex items-center justify-center">
        <FilledButton />
        </div>
      </div>
    </div>
  );
};

export default BouquetComponent;