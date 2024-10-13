import Link from "next/link";

const page = () => {
  return <div className="flex flex-col text-center">
    <h1 className="font-semibold text-3xl mt-3  ">Our Technology </h1>  
    <p >Sharing my thoughts and ideas.</p>
    <Link href="/main/Technology/TripleRouting">
    <button className="bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition w-[15rem]">check Triple Routing</button>
    </Link>

  </div>;
};

export default page;
