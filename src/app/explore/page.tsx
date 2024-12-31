import Link from "next/link";
import Footer from "../components/footer";
import Image from "next/image";

// Example image imports (replace these with your actual imports)
import techImage from '../../../public/assets/tech.png';
import wellnessImage from '../../../public/assets/wallnes.png';
import travelImage from '../../../public/assets/travell.jpg';
import foodImage from '../../../public/assets/food.png';
import creativityImage from '../../../public/assets/creativity.jpg';
import financeImage from '../../../public/assets/finance.png'; // New image import

const SwipeableCards = () => {
  const cards = [
    {
      id: 1,
      title: "Tech Innovations",
      description: "Explore the latest breakthroughs in technology.",
      image: techImage,
      link: "components/tech",
    },
    {
      id: 2,
      title: "Wellness Tips",
      description: "Learn how to maintain a balanced and healthy lifestyle.",
      image: wellnessImage,
      link: "components/wellness",
    },
    {
      id: 3,
      title: "Travel Guides",
      description: "Discover the best travel destinations and tips.",
      image: travelImage,
      link: "components/travel",
    },
    {
      id: 4,
      title: "Gourmet Recipes",
      description: "Try out our delicious and easy-to-make recipes.",
      image: foodImage,
      link: "components/food",
    },
    {
      id: 5,
      title: "Creative Ideas",
      description: "Get inspired with creative project ideas and DIY guides.",
      image: creativityImage,
      link: "components/creativity",
    },
    {
      id: 6,
      title: "Financial Tips",
      description: "Manage your finances effectively with expert advice.",
      image: financeImage,
      link: "components/finance",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-start text-center p-5 items-center min-h-screen bg-gray-100 pt-8">
        <h1 className="text-4xl font-bold text-center pt-20">
          Discover Topics That Inspire You
        </h1>
        <p className="pb-10 pt-4">
          This blog brings together tech innovations, wellness tips, travel guides, gourmet recipes, creative ideas, and financial advice to help you live your best life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ${
                index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
              }`}
            >
              <Image
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
                width={600}
                height={300}
              />
              <div className="p-4">
                <Link className="text-black" href={card.link}>
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                </Link>
                <p className="text-gray-600 text-sm">{card.description.replace(/'/g, "&apos;")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SwipeableCards;
