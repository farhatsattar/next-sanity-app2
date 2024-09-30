/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const getBlog = async () => {
  return await client.fetch('*[_type == "blog"]');
};

export default async function blog() {
  const blogs = await getBlog();

  return (
    <div>
      <div className="flex justify-center items-center p-8">
        <h1 className="text-4xl text-center text-blue-700 font-bold ">
          Welcome to Dental Health Blog!
        </h1>
      </div>

      <div className="flex-wrap-reverse mt-15 ">
        {blogs.map((blog: any) => (
          <div key={blog._id} className="border rounded-md shadow-lg p-5">
            <h1 className="font-bold text-5xl ">{blog.Title}</h1>
            <p className="p-5 mt-5">{blog.description}</p>
            <Image
              src={urlFor(blog.image).url()}
              height={300}
              width={300}
              alt="img-blog"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
