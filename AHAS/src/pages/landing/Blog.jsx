import React from "react";
import { NavLink } from "react-router-dom";
import { useBlogs } from "../../context/BlogsContextProvider";
import { useAuth } from "../../context/AuthContextProvider";
import AuthGuard from "../../utils/AuthGuard";

const Blog = () => {
  const { blogs, loading, error } = useBlogs();
  const { isAuth } = useAuth();

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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section>
      {!isAuth && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-opacity-50 bg-gray-50 backdrop-blur-sm flex justify-center items-center">
          <AuthGuard />
        </div>
      )}
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <ol
          className="relative grid grid-cols-1 gap-3 lg:grid-cols-2 sm:grid-cols-2"
          role="list"
        >
          {loading ? (
            <p className="h-screen text-6xl text-black font-bold animate-pulse flex justify-center items-center">
              Loading...
            </p>
          ) : (
            blogs.map((blog) => (
              <li className="p-2 border bg-gray-50 rounded-3xl" key={blog.id}>
                <NavLink to={`/blog/${blog.slug}`}>
                  <div className="p-10 bg-white border shadow-lg rounded-2xl">
                    <div>
                      <div>
                        <div className="flex-shrink-0 block">
                          <div className="flex items-center">
                            <div>
                              <img
                                alt={blog.user?.fullname}
                                className="inline-block object-cover rounded-full size-9"
                                // src={blog.user?.profile_picture}
                                src="https://source.unsplash.com/75x75/?portrait"
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-black group-hover:text-blue-500">
                                {blog.user?.fullname} ·
                                <span className="text-gray-500">
                                  {" "}
                                  {formatDate(blog.created_at)}{" "}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-8 text-lg font-medium leading-6 text-black">
                        {blog.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-base font-medium text-gray-500 text-balance line-clamp-3">
                      {blog.content}
                    </p>
                    <div className="inline-flex items-center justify-between w-full mt-4">
                      <div>
                        <span>
                          <ion-icon
                            name="bookmark-outline"
                            className="w-5 text-blue-500 group-hover:text-black md hydrated"
                            role="img"
                            aria-label="bookmark outline"
                          ></ion-icon>
                        </span>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </li>
            ))
          )}
        </ol>
      </div>
    </section>
  );
};

export default Blog;
