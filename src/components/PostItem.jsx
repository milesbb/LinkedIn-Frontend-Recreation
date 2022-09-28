const PostItem = ({post}) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        background: "white",
      }}
      className="text-left position-relative my-2"
    >
    {/* TEMPALTE START */}
        {/* NAZAMI PUT YOUR TEMPLATE HERE  */}
        {/* the post is passed as props to this component as an object, check discord for how the response is returned */}
        {/* EXAMPLES: post.text, post.user.name, post.user.title */}
      <p>Test display text: {post.text}</p>
      {/* TEMPLATE END */}
    </div>
  );
};

export default PostItem;
