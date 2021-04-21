export default function GithubCommits() {
  return (
    <div id="github-commits" className="medium-box">
      <div className="box-header">
        <h3>Github Commits</h3>
        <i className="far fa-check-circle light-green"></i>
        <i className="far fa-times-circle light-red"></i>
      </div>
      <div className="box-content">
        <p>Github Commits: [insert number]</p>
        <form id="github-commits-form">
          <label htmlFor="commit_number">Update Commits:</label>
          <br />
          <input type="text" name="commit_number" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
