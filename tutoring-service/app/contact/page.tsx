import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-base-100">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-10 grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-accent text-primary">
            Contact Info
          </h2>
          <p className="text-gray-700">
            <strong>Address:</strong>
            <br />
            123 Street, City, ON A1B 2C3
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong>
            <br />
            (123) 456-7890
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong>
            <br />
            <a
              href="mailto:info@tutoringService.ca"
              className="text-primary hover:underline "
            >
              info@tutoringService.ca
            </a>
          </p>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Message</span>
            </label>
            <textarea
              placeholder="Write your message..."
              className="textarea textarea-bordered w-full h-32"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn bg-accent text-white hover:bg-accent-focus w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
