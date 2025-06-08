"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ReservationForm() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const serviceType = searchParams.get("serviceType") || "Exam-review";

  const date = searchParams.get("date") || "Date Not Provided";
  const time = searchParams.get("time") || "Time Not Provided";
  const location = searchParams.get("location") || "Location Not Provided";

  // Exam-review specific
  const course = searchParams.get("course") || "Course Not Provided";
  const costPerHour = searchParams.get("costPerHour") || "Cost Not Provided";

  // Mentorship-specific
  const year = searchParams.get("year") || "Year Not Provided";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      {submitted && (
        <div className="toast toast-center">
          <div className="alert alert-success">
            <span className="text-gray-700 font-bold">
              Reservation successful! Please arrive on time and present your
              student ID to the TA.
            </span>
          </div>
        </div>
      )}
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-primary mb-2">
          {serviceType === "Mentorship"
            ? "Mentorship Group Reservation"
            : "Exam Review Reservation"}
        </h1>
        <h2 className="text-md font-semibold text-gray-500 mb-4">
          Reserve Your Spot
        </h2>

        <div className="mb-6">
          {serviceType === "Exam-review" ? (
            <>
              <p className="text-gray-700 mb-1">
                <strong>Course:</strong> {course}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Cost per Hour:</strong> ${costPerHour}
              </p>
            </>
          ) : (
            <p className="text-gray-700 mb-1">
              <strong>Year:</strong> {year}
            </p>
          )}
          <p className="text-gray-700 mb-1">
            <strong>Date:</strong> {date}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Time:</strong> {time}
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> {location}
          </p>
          {serviceType === "Mentorship" && (
            <p className="text-gray-700">
              <strong>Cost:</strong> Free
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            value={formData.fname}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            value={formData.lname}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />

          <button
            type="submit"
            className="btn bg-orange-500 hover:bg-orange-600 text-white w-full"
          >
            Reserve
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="/" className="text-blue-500 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
