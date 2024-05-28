import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { GetBlogsAPI } from "../api/BlogApi";

export const BlogContext = createContext();

const BlogsContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      setLoading(false);
      const response = await GetBlogsAPI();
      setBlogs(response);
      setError(null);
    } catch (error) {
      setError(error);
      console.log("Error fetching blog posts", error);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const createBlog = useCallback(async (data) => {
    setLoading(true);
    try {
      setLoading(false);
      setBlogs((prevBlogs) => [...prevBlogs, data]);
      setError(null);
    } catch (error) {
      setError(error);
      console.log("Error creating blog post", error);
    }
  }, []);
  const value = useMemo(
    () => ({ blogs, loading, error }),
    [blogs, loading, error]
  );
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export const useBlogs = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogsContextProvider");
  }
  return context;
};

export default BlogsContextProvider;
