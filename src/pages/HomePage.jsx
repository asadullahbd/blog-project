import React from 'react'
import Layout from '../layout/Layout'
import { fetchLatestBlogs } from '../APIRequest/APIRequest';
import Loader from '../components/Loader';
import BlogList from '../components/BlogList';
import { useState } from 'react';
import { useEffect } from 'react';

const HomePage = () => {
    const [list,setList] = useState(null);
    useEffect(() =>{
        (async()=>{
            const res =await fetchLatestBlogs();
            setList(res);
        })()
    },[])
  return (
    <Layout>
        {list === null ? <Loader/> : <BlogList list={list}/>}
    </Layout>
  )
}

export default HomePage