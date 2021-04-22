export default function BlogPosts() {
  return (
    <div id="blog-posts" className="medium-box">
      <div className="box-header">
        <h3>Blog Post</h3>
        <i className="far fa-check-circle light-green"></i>
        <i className="far fa-times-circle light-red"></i>
      </div>
      <div className="box-content">
        <p>Blog Post URL: [display url]</p>
        <form id="blog-post-form">
          <label htmlFor="blog_url">Update Blog URL:</label>
          <br />
          <input type="text" name="blog_url" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
