import React from "react";
import { useState } from "react";
import { fetchCategoriesList } from "../APIRequest/APIRequest";
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";
import Loader from "../components/Loader";

const Layout = (props) => {
    const [list,setList] = useState(null);
    useEffect(() =>{
        (async()=>{
            const res =await fetchCategoriesList();
            setList(res);
        })()
    },[])
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {list === null ? <Loader /> :(list.map((item,index)=>{
                                return(
                                    <li key={index}>
                                        <NavLink to={`/blogsByCategory/${item.id}`} >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                )
                            }))}
                        </ul>
                    </div>
                    <NavLink to={`/`} className="btn btn-ghost normal-case text-xl">MrLogo</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {list === null ? <Loader /> :(list.map((item,index)=>{
                                return(
                                    <li key={index}>
                                        <NavLink to={`/blogsByCategory/${item.id}`} >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                )
                            }))}
                    </ul>
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default Layout;
