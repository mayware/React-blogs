import useFetch from './useFetch';
import BlogList from './BlogList';
const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="content">
            {isPending && <div>Loading</div>}
            {blogs && <BlogList blogz={blogs} />}
        </div>
    );
}

export default Home;