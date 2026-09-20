import Image from "next/image";
import bannerImg from "@/asset/pngwing 1.png";

const Banner = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-center items-center my-7 bg-[#f3f3f3] rounded-3xl px-30 py-20">
        <div className="w-2/3">
            <h1 className="text-6xl mb-5 font-bold">Books to freshen up your bookshelf</h1>
            <button className="btn btn-success text-white">View the list</button>
        </div>
        <div className="w-1/3">
            <Image src={bannerImg} alt="Book" className="object-contain"></Image>
        </div>
      </div>
    </section>
  );
};

export default Banner;
