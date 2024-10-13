
const ServicePage = () => {
  return (
    <div className="service-page">
      {/* Service Page Header */}
      <header className="bg-gray-800 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4">We provide the best services to help you grow your blog.</p>
      </header>

      {/* Services List */}
      <section className="services-list container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="service-item bg-white shadow-lg p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Content Creation</h2>
            <p className="text-gray-600">We create engaging content that resonates with your audience and boosts your blog's visibility.</p>
          </div>
          
          {/* Service 2 */}
          <div className="service-item bg-white shadow-lg p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">SEO Optimization</h2>
            <p className="text-gray-600">Our SEO experts help you rank higher in search results and drive more traffic to your site.</p>
          </div>
          
          {/* Service 3 */}
          <div className="service-item bg-white shadow-lg p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Social Media Management</h2>
            <p className="text-gray-600">We manage your social media presence to engage with your audience and grow your brand.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© 2024 BlogWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ServicePage;
