import React from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";

type Post = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  content: string;
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  };
};

export default async function Home() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2023-01-05",
    useCdn: false,
  });
  const query = '*[_type == "blog" && defined(slug.current)][5...8]';
  const query2 = '*[_type == "blog" && defined(slug.current)][11...15]';
  const blogs: Post[] = await client.fetch(query);
  const blogs2: Post[] = await client.fetch(query2);

  const builder = imageUrlBuilder(client);

  const urlFor = (source: SanityImageSource) => builder.image(source);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Transform Your Life with Fitness
          </h1>
          <p className="text-lg mb-6">
            Get the body and health you&apos;ve always dreamed of with our tips.
          </p>
          <a
            href="#programs"
            className="bg-cyan-950 text-white py-2 px-6 rounded-lg text-lg transition hover:bg-orange-500"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="max-w-7xl text-center mx-auto">
          <h2 className="text-4xl font-semibold mb-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          {blogs.map((blog) => {
            return (
              <Link href={blog.slug.current} key={blog._id}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                {blog.image?.asset?._ref ? (
                  <Image
                    src={urlFor(blog.image.asset).width(500).height(280).url()}
                    alt={blog.title}
                    height={480}
                    width={500}
                    className="object-cover"
                  />
                ) : (
                  <div>No image available</div>
                )}
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p>{blog.description.slice(0, 300)}</p>
              </div>
              </Link>
            );
          })}
          </div>
        </div>
      </section>

      {/* Popular Programs Section */}
      <section className="py-20" id="programs">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-10">Popular Posts</h2>
           <div className="flex overflow-x-auto space-x-10 justify-around">
          {
            blogs2.map((blogs)=>{
              return(
                <div className="w-64 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition" key={blogs._id}>
              <Image
                src={urlFor(blogs.image.asset).width(720).height(600).url()}
                alt={blogs.title}
                width={250}
                height={150}
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">
                {blogs.title}
              </h3>
              <p>{blogs.description.slice(0,250)}....</p>
              <Link
                href={blogs.slug.current}
                className="text-cyan-700 font-semibold"
              >
                Learn More
              </Link>
            </div>
              )
            })
          }
          </div> 
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-10">What Our Clients Say</h2>
          <div className="flex justify-center space-x-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
              <p className="italic mb-4">
                &quot;This program changed my life! I lost 20 lbs and feel healthier
                than ever.&quot;
              </p>
              <h4 className="font-semibold">John Doe</h4>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
              <p className="italic mb-4">
                &quot;The personalized workout plan was exactly what I needed to stay
                motivated.&quot;
              </p>
              <h4 className="font-semibold">Jane Smith</h4>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
              <p className="italic mb-4">
                &quot;Amazing nutrition tips and meal plans. I feel more energized
                every day!&quot;
              </p>
              <h4 className="font-semibold">Michael Johnson</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
