import { useEffect, useState } from "react";
import Post from "../Post/Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('posts.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Posts:{posts.length} </h1>
            posts.map(post => <Post></Post>)
        </div>
    );
};

export default Posts;