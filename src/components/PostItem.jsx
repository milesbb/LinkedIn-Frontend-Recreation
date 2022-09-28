const PostItem = ({post}) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        background: "white",
      }}
      className="text-left position-relative my-2"
    >
      <h2>{post.text}</h2>
    </div>
  );
};

export default PostItem;
