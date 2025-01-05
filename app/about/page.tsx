import React from "react";

export default function About() {
  return (
    <div>
      {/* About Us Section */}
      <section className="py-20 bg-gray-100" id="about">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-10">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Our mission is to help you live your healthiest, most fit life
            possible. Whether you&apos;re just starting your fitness journey or
            you&apos;re a seasoned athlete, we are here to guide you every step of
            the way.
          </p>
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                Our Purpose
              </h3>
              <p className="text-gray-700 mb-4">
                At our core, we believe that health and fitness are essential
                for a balanced life. We aim to inspire and equip you with the
                tools, knowledge, and motivation you need to achieve your fitness
                goals. Whether it&apos;s through personalized workout programs,
                nutrition plans, or daily motivation, we want to help you unlock
                your full potential.
              </p>
              <p className="text-gray-700 mb-4">
                Our team consists of passionate fitness experts, nutritionists,
                and life coaches dedicated to empowering individuals to lead
                healthier lives. We are constantly updating our content to make
                sure you have access to the most effective and innovative
                fitness and wellness solutions.
              </p>
              <p className="text-gray-700">
                Join us today, and let&apos;s embark on this fitness journey together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
