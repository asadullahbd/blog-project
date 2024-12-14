import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchBlogById } from "../APIRequest/APIRequest";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import BlogDetails from "../components/BlogDetails";
import Layout from "../layout/Layout";

const BlogDetailsByIdPage = () => {
    const { blogID } = useParams();
    const [blog, setBlog] = useState(null);
    useEffect(() => {
        (async () => {
            const res = await fetchBlogById(blogID);
            setBlog(res);
        })();
    }, [blogID]);
    return (
        <Layout>
            {blog === null ? <Loader /> : <BlogDetails blog={blog} />}
        </Layout>
    );
};

export default BlogDetailsByIdPage;
