
const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Contact Page Header */}
      <header className="bg-gray-800 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4">We'd love to hear from you! Reach out to us anytime.</p>
      </header>

      {/* Contact Form Section */}
      <section className="contact-form container mx-auto py-12">
        <div className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Send us a message</h2>
          
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                rows="5"
                placeholder="Write your message here"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">Feel free to contact us via the following methods:</p>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="info-item">
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600">contact@blogwebsite.com</p>
            </div>

            <div className="info-item">
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600">+123 456 7890</p>
            </div>

            <div className="info-item">
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-600">123 Blog Street, City, Country</p>
            </div>
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

export default ContactPage;
