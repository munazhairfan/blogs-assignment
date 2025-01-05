import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

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

  const client = createClient({
          projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
          dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
          apiVersion: '2023-01-05',
          useCdn: false,
        });
  const fetchBlogBySlug = async (slug: string): Promise<Post | null> => {
    const query = `*[_type == "blog" && slug.current == $slug][0]`; // Sanity query
    const blog = await client.fetch(query, { slug });
    return blog;
  };

const SlugPage = async({ params }: { params: { slug: string } }) => {
    const { slug } = params;

    const blog = await fetchBlogBySlug(slug);
        if (!blog) {
            return (
              <section className="text-gray-600 body-font">
                <div className="container mx-auto py-24 text-center">
                  <h1>Post not found!</h1>
                </div>
              </section>
            );
          }
    
          const builder = imageUrlBuilder(client);
const urlFor = (source: Post["image"]["asset"]) => builder.image(source);


  return (
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt={blog.title}
            src={urlFor(blog.image.asset).width(720).height(600).url()}
            width={720}
            height={600}
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-700">
              {blog.title}
            </h1>
            <p className="mb-8 leading-relaxed text-xl">{blog.description}</p>
            </div>
            </div>
      </section>
  );
};

export default SlugPage;
