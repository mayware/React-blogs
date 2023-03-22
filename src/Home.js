import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data from the resource')
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, []);
    return (
        <div className="content">
            {isPending && <div>Loading</div>}
            {blogs && <BlogList blogz={blogs} />}
        </div>
    );
}

export default Home;