import { Alert, AlertIcon, Center, Flex } from "@chakra-ui/react";
import {
  Header,
  PostsList,
  PostDetails,
  PostForm,
  About,
  Footer,
  Missing,
  apiRequest,
} from "./components/index";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchPost, setSearchPost] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const POSTS_URL = "http://localhost:3500/posts";

  useEffect(() => {
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchPost) ||
        post.description.toLowerCase().includes(searchPost)
    );
    setSearchResults(filteredPosts.reverse());
  }, [posts, searchPost]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(POSTS_URL);
        if (!response.ok)
          throw Error("Seems to be a problem. Posts did not receive!");
        const postsList = await response.json();
        setPosts(postsList);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchPosts();
    }, 1000);
  }, []);

  // Add post
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyy pp");
    const newPost = {
      id,
      title: postTitle,
      datetime,
      description: postDescription,
    };
    const postsList = [...posts, newPost];
    setPosts(postsList);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    };
    const result = await apiRequest(POSTS_URL, postOptions);
    if (result) setFetchError(result);
    setPostTitle("");
    setPostDescription("");
    navigate("/");
  };

  const handleDelete = async (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    const deleteOptions = { method: "DELETE" };
    const reqUrl = `http://localhost:3000/post/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
    navigate("/");
  };
  return (
    <Center>
      <Flex
        // justifyContent="flex-start"
        position="relative"
        w="100%"
        maxW="800px"
        h="100vh"
        flexDirection="column"
        alignItems="center"
        border="1px solid #ddd"
        boxShadow="md"
      >
        <Header searchPost={searchPost} setSearchPost={setSearchPost} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {fetchError && (
                  <Alert status="error" variant="left-accent">
                    <AlertIcon />
                    {`${fetchError}`}
                  </Alert>
                )}
                {isLoading && (
                  <Alert status="info" variant="left-accent">
                    <AlertIcon />
                    Posts are loading..., Please be patient!
                  </Alert>
                )}
                {!fetchError && !isLoading && (
                  <PostsList searchPost={searchPost} posts={searchResults} />
                )}
              </>
            }
          />
          <Route
            exact
            path="/post"
            element={
              <PostForm
                title={postTitle}
                description={postDescription}
                setTitle={setPostTitle}
                setDescription={setPostDescription}
                onAdd={handleSubmit}
              />
            }
          />
          <Route
            path={`/post/:id`}
            element={
              <PostDetails
                isLoading={isLoading}
                fetchError={fetchError}
                posts={posts}
                handleDelete={handleDelete}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </Flex>
    </Center>
  );
};

export default App;
