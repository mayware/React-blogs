import { useState } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            body: "Cool Games are: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quod!",
            likes: "15",
            title: "Games"
        },
        {
            id: 2,
            body: "Movies to watch: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quod!",
            likes: "5",
            title: "Movies"
        },
        {
            id: 3,
            body: "Important news are: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, quod!",
            likes: "15",
            title: "News"
        },
    ]);

    function handleDelete(id) {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs);
    }
    return (
        <div className="content">
            <BlogList blogz={blogs} handleDelete={handleDelete} />
        </div>
    );
}

export default Home;