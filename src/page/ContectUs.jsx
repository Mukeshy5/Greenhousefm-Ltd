import { useState } from "react";

const ContectUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', form);
    setSubmitted(true);
  }

  return (
    <main className="bg-white">
      <div className="bg-[linear-gradient(135deg,_#ecfdf5_0%,_#f8fff9_50%,_#eff6ff_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:py-24 lg:py-28">
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-emerald-700">Contact Us</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Get in Touch</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We are here to support your wholesale journey with responsive communication, expert guidance, and reliable service.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">Fast Response</span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">Wholesale Support</span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">Trusted Team</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-extrabold text-gray-900">Contact Details</h2>
              <p className="mt-4 text-lg text-gray-600">Reach us by phone, email, or visit our office for a personal consultation.</p>

              <div className="mt-8 space-y-5 text-lg">
                <div className="flex items-start gap-4 rounded-2xl bg-emerald-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xl text-white">☎</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-700">07494625582</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl bg-emerald-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xl text-white">✉</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-700">info@greenhousefmltd.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl bg-emerald-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xl text-white">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Address</h3>
                    <p className="text-gray-700">Jolyon House, Amberley Way, Cranford, Hounslow TW4 6BH</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Why choose us?</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="font-semibold text-gray-900">Reliable communication</p>
                  <p className="mt-2 text-sm text-gray-600">We respond quickly and keep you informed at every step.</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="font-semibold text-gray-900">Flexible service</p>
                  <p className="mt-2 text-sm text-gray-600">Support for both small and large wholesale requirements.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gray-50 p-8 shadow-lg ring-1 ring-gray-100">
            <h2 className="text-3xl font-extrabold text-gray-900">Send Us a Message</h2>
            {submitted ? (
              <div className="mt-6 rounded-2xl bg-emerald-100 p-6 text-center text-lg font-semibold text-emerald-800">
                Thank you for your message! We will get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 px-4 py-3 text-lg focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 px-4 py-3 text-lg focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 px-4 py-3 text-lg focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Tell us how we can help"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-emerald-600 px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We welcome visits from retailers, distributors, and fashion buyers looking for dependable wholesale partnerships.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl shadow-xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.586638031195!2d-0.4194440842300185!3d51.48182417963095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876721ea5849df7%3A0x1945e8360773f853!2sJolyon%20House%2C%20Amberley%20Way%2C%20Hounslow%20TW4%206BH%2C%20UK!5e0!3m2!1sen!2sin!4v1620456112182!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContectUs;
