import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-white px-6 md:px-16 py-12">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg mb-10">
          TutoringService is dedicated to helping students succeed at every
          stage of their academic journey. Whether you're in high school or
          university, our mission is to provide personalized support through
          expert-led tutoring, mentorship, and academic guidance.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-700">
            To empower students with the tools and knowledge they need to
            achieve academic excellence. We strive to create a supportive,
            engaging, and personalized learning environment for every student.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Student-Centered Learning</li>
            <li>Accessible and Inclusive Education</li>
            <li>Continuous Growth and Improvement</li>
            <li>Mentorship and Community Support</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-left col-span-1 md:col-span-2">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-700">
            Our team is made up of experienced tutors, mentors, and academic
            advisors who are passionate about education. With flexible learning
            formats, interactive sessions, and personalized feedback, we ensure
            that every student gets the support they need to thrive.
          </p>
        </div>
      </section>
    </main>
  );
}
