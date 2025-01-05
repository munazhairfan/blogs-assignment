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
    content:string;
    image: {
      asset: {
        _ref: string;
        url: string;
      };
    };
  };

const page = async() => {

    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: '2023-01-05',
        useCdn: false,
      });
      const query = '*[_type == "blog" && defined(slug.current)]';
      const blogs: Post[] = await client.fetch(query);

      const builder = imageUrlBuilder(client);

      const urlFor = (source: SanityImageSource) => builder.image(source);

  return (
    <div>
      <h1 className="my-8 text-4xl font-bold text-cyan-700 text-center">BLOGS</h1>
      {
        blogs.map((blog)=>{
            return(
              <div className="py-8 flex flex-wrap md:flex-nowrap items-center" key={blog._id}>
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              {blog.image?.asset?._ref ? (
                    <Image
                      src={urlFor(blog.image.asset)
                        .width(500)
                        .height(280)
                        .url()}
                      alt={blog.title}
                      height={480}
                      width={500}
                      className="object-cover"
                    />
                  ) : (
                    <div>No image available</div>
                  )}
              </div>
              <div className="md:flex-grow ml-5">
                <h2 className="text-2xl font-medium text-cyan-700 title-font mb-2">
                  {blog.title}
                </h2>
                <p className="leading-relaxed">{blog.description.slice(0,500)}......</p>
                <Link href={blog.slug.current} className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default page