import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/getPosts";
import Loading from "./Loading";
import PostItem from "./PostItem";
import Warning from "./Warning";

const PostsSection = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => {
    return state.loadedPosts.posts;
  });
  const postsLoading = useSelector((state) => {
    return state.loadedPosts.postsLoading;
  });
  const postsError = useSelector((state) => {
    return state.loadedPosts.postsError;
  });

  const getPostsData = () => {
    dispatch(getPosts(""));
  };

  useEffect(() => {
    getPostsData();
  }, []);

  useEffect(() => {
    if (postsLoading) {
      getPostsData();
    }
  }, [postsLoading]);
console.log(postsLoading, postsError, posts)
  return (
    <div>
      {postsLoading && <Loading />}
      {!postsLoading && postsError && (
        <Warning variant="danger" message="error loading posts" />
      )}
      {!postsLoading &&
        !postsError &&
        (posts.length !== 0) &&
        posts.map((post) => {
          return <PostItem key={post._id} post={post} />
        })}
    </div>
  );
};

export default PostsSection;
