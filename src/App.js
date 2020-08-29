import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentpage] =  useState(1);
  const [postPerpage, setPostperpage] = useState(6);

  useEffect(() => {
    const fetchPost = async () => {
        setLoading(true);
        const res = await axios.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ec9a1008228a4f61a2d6be4879e4a9bd');
        setPosts(res.data.articles);
        console.log(res);
        setLoading(false);
      }
      fetchPost();
  },[]);

  //get post

  const indexOfLastPost = currentPage * postPerpage;
  const indexOfFirstPost = indexOfLastPost - postPerpage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page

  const paginate = (pageNumber) => setCurrentpage(pageNumber);

  return (

    <div className="container">
      <div class="jumbotron">
        <h1 class="display-4">My Blog </h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      </div>

      <Posts posts={currentPost} loading={loading}></Posts>
      <Pagination postsPerPage={postPerpage} totalPosts={posts.length} paginate={paginate}></Pagination>
    </div>
  );
}

export default App;
