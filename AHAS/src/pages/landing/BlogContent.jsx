import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useBlogs } from "../../context/BlogsContextProvider";
import { socials } from "../../utils/data";

const BlogContent = () => {
  const { slug } = useParams();
  const { blogs, loader, error } = useBlogs();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const blog = blogs.find((blog) => blog.slug === slug);

  const formatDate = (timestamp) => {
    const currentDate = new Date();
    const postDate = new Date(timestamp);
    const difference = currentDate - postDate;
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }
  };

  return (
    <article className="max-w-[84rem] px-6 py-24 mx-auto space-y-12 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
      {loader ? (
        <p className="w-full bg-gray-400 animate-pulse">Loading...</p>
      ) : (
        <Fragment>
          <div className="w-full mx-auto space-y-4 text-center">
            <p className="text-xs font-semibold tracking-wider uppercase">
              AHAS Blog
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {blog?.title}
            </h1>
            <p className="text-sm text-gray-400 dark:text-gray-600">
              by{" "}
              <a className="text-violet-400 dark:text-violet-600">
                <span itemProp="name">{blog?.user.fullname} </span>
              </a>
              on{" "}
              <time dateTime="2021-02-12 15:34:18-0200">
                {formatDate(blog?.created_at)}
              </time>
            </p>
          </div>
          <div className="text-gray-100 dark:text-gray-800">
            <p>{blog?.content}</p>
          </div>
          <div className="pt-12 border-t border-gray-700 dark:border-gray-300">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
              <img
                src="https://source.unsplash.com/75x75/?portrait"
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 dark:bg-gray-500 border-gray-700 dark:border-gray-300"
              />
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold">{blog?.user.fullname}</h4>
                <p className="text-gray-400 dark:text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Assumenda ducimus labore magni facilis, ex sequi minus quam
                  officia explicabo laborum optio laboriosam numquam cumque
                  molestias sit enim, aliquam aliquid! Dolor quas unde
                  voluptatem asperiores. Dolorum, ullam reiciendis, quo
                  molestias eligendi tempore debitis corrupti earum in veniam
                  odio facilis saepe quam.
                </p>
              </div>
            </div>
            <div className="flex justify-center pt-4 space-x-4 align-center">
              {socials.map((social, index) => (
                <a
                  key={index}
                  rel="noopener noreferrer"
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  className="p-2 rounded-md text-gray-100 dark:text-gray-800 hover:text-violet-400 hover:dark:text-violet-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </article>
  );
};

export default BlogContent;
