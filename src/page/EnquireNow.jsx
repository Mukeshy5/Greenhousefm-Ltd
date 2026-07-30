import React from 'react';

const EnquireNow = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-emerald-800 text-white">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1974&auto=format&fit=crop"
            alt="Fashion workshop"
          />
          <div className="absolute inset-0 bg-emerald-900 opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Enquire With Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Let's start a conversation. Whether you have a question about our products, need a quote, or want to discuss a partnership, we're here to help.
          </p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Get in Touch Directly</h2>
            <p className="mt-4 text-lg text-gray-600">
              Reach out to us through any of the channels below. We're responsive and ready to assist you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl text-emerald-600 mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">By Phone</h3>
              <p className="text-lg text-gray-700">07494625582</p>
              <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9am - 5pm</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl text-emerald-600 mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-2">By Email</h3>
              <p className="text-lg text-gray-700">info@greenhousefmltd.com</p>
              <p className="text-sm text-gray-500 mt-2">We reply within 24 hours</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl text-emerald-600 mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Our Office</h3>
              <p className="text-lg text-gray-700">Jolyon House, Amberley Way, Cranford, Hounslow TW4 6BH</p>
              <p className="text-sm text-gray-500 mt-2">By appointment only</p>
            </div>
          </div>
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Enquiry Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              We've streamlined our process to ensure you get the information you need quickly and efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-extrabold text-emerald-100">1</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Submit Your Enquiry</h3>
              <p className="mt-2 text-gray-600">Reach out via phone, email, or our contact form with your requirements.</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-extrabold text-emerald-100">2</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Receive a Custom Quote</h3>
              <p className="mt-2 text-gray-600">Our team will review your needs and send you a tailored quote and product suggestions.</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-extrabold text-emerald-100">3</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Finalize & Order</h3>
              <p className="mt-2 text-gray-600">Once you're happy with the details, we'll finalize the order and arrange for delivery.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Find Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our office is located with easy access. We welcome you for scheduled appointments.
          </p>
          <div className="mt-8 rounded-lg overflow-hidden shadow-xl">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.586638031195!2d-0.4194440842300185!3d51.48182417963095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876721ea5849df7%3A0x1945e8360773f853!2sJolyon%20House%2C%20Amberley%20Way%2C%20Hounslow%20TW4%206BH%2C%20UK!5e0!3m2!1sen!2sin!4v1620456112182!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquireNow;
