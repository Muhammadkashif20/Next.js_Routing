import Link from "next/link";
import Header from "./Header";
import FeaturedPosts from "./FeaturedPosts";
import BlogCategories from "./BlogCategories";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    <Header/>
    <FeaturedPosts/>
    <BlogCategories/>
    <Footer/>
    </div>
  );
};

export default Home;
