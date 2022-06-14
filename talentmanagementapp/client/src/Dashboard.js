import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DPSTMDashboard() {
  const [body, setBody] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((body) => setBody(body));
  }, []);

  var heading = [
    "Project ID",
    "Project Name",
    "Project Description",
    "Status",
    "Action",
  ];

  const DisplayHeaderData = heading.map((head) => {
    return <th>{head}</th>;
  });

  const DisplayBodyData = body.map((data) => {
    return (
      <tr>
        <td>{data.ProjectId}</td>
        <td>{data.ProjectName}</td>
        <td>{data.ProjectDescription}</td>
        <td>{data.ProjectStatus}</td>
        {data.ProjectStatus === "Submitted" ? (
          <label>APPLIED</label>
        ) : (
          <Link
            to={`/application/${data.ProjectId}`}
            state={{ ProjectId: data.ProjectId, ProjectName: data.ProjectName }}
          >
            {data.ProjectStatus === "Submitted" ? "APPLIED" : "APPLY"}
          </Link>
        )}
      </tr>
    );
  });
  return (
    <div className="divCss">
      <table style={{ width: 500 }}>
        <thead>{DisplayHeaderData}</thead>
        <tbody>{DisplayBodyData}</tbody>
      </table>
    </div>
  );
}
// }

export default DPSTMDashboard;
