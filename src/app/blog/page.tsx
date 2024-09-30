/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query =
        '*[_type == "post"]{_id, title, author-> {name}, publicationDate, image}';
      const fetchedPosts = await client.fetch(query);
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-blue-400 font-semibold text-item-center p-5">
        Blog Posts
      </h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post._id} className="border rounded-md shadow-lg p-5">
            <h2>{post.title}</h2>
            <Image
              src={urlFor(post.image).url()}
              height={300}
              width={300}
              alt="img-post"
            />
            <p>By: {post.author?.name}</p>
            <p>
              Published on:{" "}
              {new Date(post.publicationDate).toLocaleDateString()}
            </p>
          </li>
        ))}
        )
      </ul>
    </div>
  );
};

export default PostList;
