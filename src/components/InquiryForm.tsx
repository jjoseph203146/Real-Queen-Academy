import { useState, type FormEvent } from "react";

const ENROLLMENT_OPTIONS = [
  "Early Bird — $125 (by July 17)",
  "Standard — $250 (by July 31)",
  "Not sure yet",
];

const YES_NO_OPTIONS = ["No", "Yes"];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Early bird pricing runs through end-of-day July 17; standard pricing applies after.
const EARLY_BIRD_DEADLINE = new Date("2026-07-17T23:59:59");
const EARLY_BIRD_PAYMENT_URL = "https://buy.stripe.com/28E28sb6eg6L37o0vE9bO0d";
const STANDARD_PAYMENT_URL = "https://buy.stripe.com/6oU5kEfmu6wbgYeguC9bO0e";

function getPaymentDetails() {
  const isEarlyBird = new Date() <= EARLY_BIRD_DEADLINE;
  return isEarlyBird
    ? { price: "$125", label: "Early Bird", url: EARLY_BIRD_PAYMENT_URL }
    : { price: "$250", label: "Standard", url: STANDARD_PAYMENT_URL };
}

type Errors = {
  fullName?: string;
  email?: string;
  phone?: string;
};

export default function InquiryForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enrollment, setEnrollment] = useState(ENROLLMENT_OPTIONS[0]);
  const [hasQuestions, setHasQuestions] = useState(YES_NO_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const paymentDetails = getPaymentDetails();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors: Errors = {};

    if (!fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    const digitCount = phone.replace(/\D/g, "").length;
    if (!phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (digitCount < 7) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <section
      id="inquire"
      className="px-6 py-[100px]"
      style={{ background: "#FBF6EF", color: "#2A0F35" }}
    >
      <div className="max-w-[640px] mx-auto">
        <div className="text-center mb-12">
          <p className="m-0 mb-3 text-[13px] tracking-[3px] uppercase text-magenta-600 font-semibold">
            Reserve Your Spot
          </p>
          <h2 className="m-0 mb-3.5 font-display font-semibold text-[36px]">
            Submit Your Inquiry
          </h2>
          <p className="m-0 text-[15px] leading-[1.7] text-[#6B5670]">
            Tell us a bit about yourself and we'll follow up with enrollment
            details for the Founding Cohort.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white border border-[#EADFCF] rounded-md p-10 text-center">
            <h3 className="m-0 mb-3 font-display font-semibold text-[24px] text-plum-900">
              Thank You
            </h3>
            <p className="m-0 mb-8 text-[15px] leading-[1.7] text-[#6B5670]">
              We've received your inquiry — we'll be in touch within 48
              hours. Ready to lock in your spot now?
            </p>
            <a
              href={paymentDetails.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-[52px] py-[18px] bg-plum-900 hover:bg-plum-700 transition-colors text-cream-50 text-[15px] tracking-[1.5px] uppercase font-semibold rounded-sm"
            >
              Pay {paymentDetails.price} — {paymentDetails.label} Enrollment
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-white border border-[#EADFCF] rounded-md p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-[1.5px] uppercase text-[#8A7590]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="px-3.5 py-[13px] border border-[#DCCFCF] rounded-[3px] font-sans text-[15px] text-plum-900 bg-cream-50"
                />
                {errors.fullName && (
                  <p className="m-0 mt-1 text-xs text-red-600">
                    {errors.fullName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-[1.5px] uppercase text-[#8A7590]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="jane@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-[13px] border border-[#DCCFCF] rounded-[3px] font-sans text-[15px] text-plum-900 bg-cream-50"
                />
                {errors.email && (
                  <p className="m-0 mt-1 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[1.5px] uppercase text-[#8A7590]">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="px-3.5 py-[13px] border border-[#DCCFCF] rounded-[3px] font-sans text-[15px] text-plum-900 bg-cream-50"
              />
              {errors.phone && (
                <p className="m-0 mt-1 text-xs text-red-600">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[1.5px] uppercase text-[#8A7590]">
                Which enrollment are you interested in?
              </label>
              <select
                value={enrollment}
                onChange={(e) => setEnrollment(e.target.value)}
                className="px-3.5 py-[13px] border border-[#DCCFCF] rounded-[3px] font-sans text-[15px] text-plum-900 bg-cream-50"
              >
                {ENROLLMENT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[1.5px] uppercase text-[#8A7590]">
                Do you have additional questions?
              </label>
              <select
                value={hasQuestions}
                onChange={(e) => setHasQuestions(e.target.value)}
                className="px-3.5 py-[13px] border border-[#DCCFCF] rounded-[3px] font-sans text-[15px] text-plum-900 bg-cream-50"
              >
                {YES_NO_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {hasQuestions === "Yes" && (
                <p className="m-0 text-xs text-[#8A7590]">
                  Alicia will reach out to you personally.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-[1.5px] uppercase text-[#8A7590]">
                What are you hoping to gain from the Academy?
              </label>
              <textarea
                rows={4}
                placeholder="Share a bit about your brand and your goals..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="px-3.5 py-[13px] border border-[#DCCFCF] rounded-[3px] font-sans text-[15px] text-plum-900 bg-cream-50 resize-y"
              />
            </div>

            <button
              type="submit"
              className="mt-2 p-4 bg-plum-900 hover:bg-plum-700 transition-colors text-cream-50 text-[15px] tracking-[1.5px] uppercase font-semibold border-none rounded-[3px] cursor-pointer"
            >
              Submit Inquiry
            </button>

            <p className="m-0 text-center text-[13px] text-[#8A7590]">
              👑 Spots are limited — we'll be in touch within 48 hours.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
