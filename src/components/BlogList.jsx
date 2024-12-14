import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
    return (
        <div className="container gap-4 mx-auto my-8 p-4 grid md:grid-cols-2 lg:grid-cols-4">
            {props.list.map((item, index) => {
                return (
                    <Link key={index} to={`/blogDetailsByID/${item.id}`}>
                        <div className="card card-compact w-full bg-base-100 shadow-xl">
                            <figure>
                                <img src={item.img} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2>{item.title}</h2>
                                <p>{item.short}</p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default BlogList;
