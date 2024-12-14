import axios from 'axios'

export const fetchCategoriesList = async ()=>{
    const apiLink = `https://basic-blog.teamrabbil.com/api/post-categories`;
    try {
        const res = await axios.get(apiLink);
        return res.data;
    } catch (error) {
        console.error(error.message);
        return []
    }
};

export const fetchLatestBlogs = async ()=>{
    const apiLink = `https://basic-blog.teamrabbil.com/api/post-newest`;
    try {
        const res = await axios.get(apiLink);
        return res.data;
    } catch (error) {
        console.error(error.message);
        return []
    }
};

export const fetchBlogsByCategory = async (id)=>{
    const apiLink = `https://basic-blog.teamrabbil.com/api/post-list/${id}`;
    try {
        const res = await axios.get(apiLink);
        return res.data;
    } catch (error) {
        console.error(error.message);
        return []
    }
};

export const fetchBlogById = async (id)=>{
    const apiLink = `https://basic-blog.teamrabbil.com/api/post-details/${id}`;
    try {
        const res = await axios.get(apiLink);
        return res.data;
    } catch (error) {
        console.error(error.message);
        return null
    }
};