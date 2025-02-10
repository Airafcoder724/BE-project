import cap from "../assets/store/cap.png";
import kit from "../assets/store/leetcode_kit.png";
import notebook from "../assets/store/notebook.png"; // Fixed spelling from "notetbook"
import t_shirt from "../assets/store/t_shirt_promo.png";
import coin from "../assets/store/coin.png";

const RedeemComponent = () => {
  const products = [
    {
      id: 1,
      title: "Event.io T-shirt",
      subtitle: "For Daily Coding Challenge",
      image: t_shirt,
      points: 7200,
    },
    {
      id: 2,
      title: "Event.io Cap",
      subtitle: "Stylish and comfortable",
      image: cap,
      points: 6000,
    },
    {
      id: 3,
      title: "Event.io Notebook",
      subtitle: "Big-O Notebook for your notes",
      image: notebook,
      points: 1200,
    },
    {
      id: 4,
      title: "Kit Combo",
      subtitle: "Includes T-shirt, keychain, and coaster",
      image: kit,
      points: 10000,
    },
  ];

  const points = 0;

  return (
    <div className="flex justify-center">
      <div className="grid w-[85%] lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            {/* Image Section */}
            <div className="bg-white flex justify-center h-[200px]">
              <img
                src={product.image}
                alt={product.title}
                className="h-[180px] w-[180px] object-contain"
              />
            </div>

            {/* Details Section */}
            <div className="flex justify-between items-center p-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm">{product.subtitle}</p>
              </div>
              {/* Points Badge */}
              <button
                disabled={points < product.points}
                className={`flex  items-center ${
                  points < product.points ? "bg-[#f5ca8c]" : ""
                } bg-[#f0ad4e] h-10 text-white px-3 py-1 rounded-lg text-sm`}
              >
                {product.points}
                <img src={coin} alt="coin" className="h-[15px] w-[15px] ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedeemComponent;
