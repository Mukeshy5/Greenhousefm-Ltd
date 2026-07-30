import { useState } from "react";

const EnquireNow = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    requirements: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry Submitted:', form);
    setSubmitted(true);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Step 1: Your Details</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input name="name" value={form.name} onChange={handleChange} className="rounded-md border-gray-300 px-4 py-3 text-lg focus:ring-emerald-500 focus:border-emerald-500" placeholder="Your Name" />
              <input name="businessName" value={form.businessName} onChange={handleChange} className="rounded-md border-gray-300 px-4 py-3 text-lg focus:ring-emerald-500 focus:border-emerald-500" placeholder="Business Name" />
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={nextStep} className="rounded-md bg-emerald-600 px-5 py-3 text-lg font-semibold text-white transition hover:bg-emerald-700">Next</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Step 2: Contact Information</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input name="email" type="email" value={form.email} onChange={handleChange} className="rounded-md border-gray-300 px-4 py-3 text-lg focus:ring-emerald-500 focus:border-emerald-500" placeholder="Email Address" />
              <input name="phone" value={form.phone} onChange={handleChange} className="rounded-md border-gray-300 px-4 py-3 text-lg focus:ring-emerald-500 focus:border-emerald-500" placeholder="Phone Number" />
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={prevStep} className="rounded-md bg-gray-200 px-5 py-3 text-lg font-semibold text-gray-700 transition hover:bg-gray-300">Back</button>
              <button onClick={nextStep} className="rounded-md bg-emerald-600 px-5 py-3 text-lg font-semibold text-white transition hover:bg-emerald-700">Next</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Step 3: Your Requirements</h3>
            <textarea name="requirements" value={form.requirements} onChange={handleChange} className="mt-4 min-h-[140px] w-full rounded-md border-gray-300 px-4 py-3 text-lg focus:ring-emerald-500 focus:border-emerald-500" placeholder="Tell us about your product needs, desired quantity, and target delivery timeline." />
            <div className="mt-6 flex justify-between">
              <button onClick={prevStep} className="rounded-md bg-gray-200 px-5 py-3 text-lg font-semibold text-gray-700 transition hover:bg-gray-300">Back</button>
              <button type="submit" className="rounded-md bg-emerald-800 px-5 py-3 text-lg font-semibold text-white transition hover:bg-emerald-900">Submit Enquiry</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="bg-white">
      <div className="bg-[linear-gradient(135deg,_#ecfdf5_0%,_#f8fff9_50%,_#fef3c7_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:py-24 lg:py-28">
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-emerald-700">Enquire Now</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Let’s Source Your Perfect Collection</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Share your requirements with us and our team will guide you with tailored pricing, availability, and delivery options.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">Custom Quotations</span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">Bulk Orders</span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">Fast Support</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-gray-50 p-8 shadow-lg ring-1 ring-gray-100">
            {submitted ? (
              <div className="rounded-2xl bg-emerald-100 p-8 text-center">
                <h2 className="text-3xl font-extrabold text-emerald-800">Thank You!</h2>
                <p className="mt-4 text-lg text-gray-700">Your enquiry has been received. Our team will review your request and get in touch within 24–48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {renderStep()}
              </form>
            )}
          </div>

          <div className="rounded-[2rem] bg-emerald-900 p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold">What Happens Next?</h2>
            <p className="mt-4 text-lg text-emerald-100">Our process is simple, transparent, and designed for your convenience.</p>
            <ul className="mt-8 space-y-6 text-lg">
              <li className="flex items-start rounded-2xl bg-white/10 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-700 font-bold">1</span>
                <div className="ml-4">
                  <h3 className="font-semibold">Request Review</h3>
                  <p className="mt-1 text-emerald-200">We assess your needs and match you with suitable wholesale products.</p>
                </div>
              </li>
              <li className="flex items-start rounded-2xl bg-white/10 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-700 font-bold">2</span>
                <div className="ml-4">
                  <h3 className="font-semibold">Pricing & Options</h3>
                  <p className="mt-1 text-emerald-200">We provide tailored pricing, product options, and wholesale guidance.</p>
                </div>
              </li>
              <li className="flex items-start rounded-2xl bg-white/10 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-700 font-bold">3</span>
                <div className="ml-4">
                  <h3 className="font-semibold">Confirmation</h3>
                  <p className="mt-1 text-emerald-200">We confirm lead times and delivery details so your order stays smooth.</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5">
              <p className="font-semibold">Need direct support?</p>
              <p className="mt-2 text-sm text-emerald-100">Call us on 07494625582 or email info@greenhousefmltd.com.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Everything you may want to know before placing your wholesale enquiry.</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">What is the minimum order quantity (MOQ)?</h3>
              <p className="mt-2 text-lg text-gray-700">Our MOQs vary by product and category. We offer flexible options suitable for both small and large businesses.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Do you offer international shipping?</h3>
              <p className="mt-2 text-lg text-gray-700">Yes, we ship globally. Shipping costs and delivery times depend on your location and order size.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Can I request samples?</h3>
              <p className="mt-2 text-lg text-gray-700">Absolutely. Please mention your request in the enquiry form and our team will guide you through the sample process.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EnquireNow;
