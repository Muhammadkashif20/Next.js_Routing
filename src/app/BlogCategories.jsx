import Link from "next/link"
const BlogCategories = () => {
  return (
    <div>
       <section className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore Categories</h2>
          <div className="flex justify-center space-x-4">
            <Link href="/main/Technology">
            <span className="bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition">Technology</span>
            </Link>
            <Link href="/main/Health">
            <span className="bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition">Health</span>
            </Link>
            <Link href="/main/Lifestyle">
            <span className="bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition">Lifestyle</span>
            </Link>
            <Link href="/main/Travel">
            <span className="bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition">Travel</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogCategories
