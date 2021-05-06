export default function JobSearchActivities() {
  return (
    <div id="job-search-activities" className="large-box">
      <div className="box-header">
        <h3>Job Search Activities</h3>
        <i className="far fa-check-circle dark-green"></i>
        <i className="far fa-times-circle dark-red"></i>
      </div>
      <div className="box-content">{orderedList()}</div>
      <button id="add-new-activity">Add New Activity</button>
    </div>
  );
}

function orderedList() {
  return (
    <ol>
      <li>
        First contact with info
        <button>Edit</button>
        <button>Delete</button>
      </li>
      <li>
        Next contact with info
        <button>Edit</button>
        <button>Delete</button>
      </li>
      <li>
        Another contact with info
        <button>Edit</button>
        <button>Delete</button>
      </li>
      <li>
        Again, a contact with info
        <button>Edit</button>
        <button>Delete</button>
      </li>
    </ol>
  );
}
