import Link from "next/link";
import Image from "next/image";
import bgImage from "../../../public/assets/explore.jpg"; // Example path, replace with your actual path

export default function Main() {
  return (
    <div className="relative h-screen bg-cover bg-center">
      <Image
        src={bgImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="relative flex flex-col md:flex-row bg-black bg-opacity-60 text-center justify-center items-center h-full text-white z-10">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-300">Welcome to Your Blog</h1>
          <p className="text-lg md:text-xl mb-8 pt-3 text-blue-200">
            Discover amazing content and stay updated with our <br /> latest posts. A unique blog that leaves a lasting impression.
          </p>
          <Link href={"#blog-topic"} passHref>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
