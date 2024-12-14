import React from 'react'
import Layout from '../layout/Layout'
import { useParams } from 'react-router-dom';
import { fetchBlogsByCategory } from '../APIRequest/APIRequest';
import Loader from '../components/Loader';
import BlogList from '../components/BlogList';
import { useState } from 'react';
import { useEffect } from 'react';

const BlogCategoryByIdPage = () => {
  const {categoryID} = useParams()
  const [list,setList] = useState(null);
    useEffect(() =>{
        (async()=>{
            const res =await fetchBlogsByCategory(categoryID);
            setList(res);
        })()
    },[categoryID])
  return (
    <Layout>
      {list === null ? <Loader/> : <BlogList list={list}/>}
    </Layout>
  )
}

export default BlogCategoryByIdPage