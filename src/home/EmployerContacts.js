export default function EmployerContacts() {
  return (
    <div id="employer-contacts" className="large-box">
      <div className="box-header">
        <h3>Job Search Activity</h3>
        <i className="far fa-check-circle light-green"></i>
        <i className="far fa-times-circle light-red"></i>
      </div>
      <div className="box-content">
        <p>Job Search Activity:</p>
        {orderedList()}
      </div>
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
