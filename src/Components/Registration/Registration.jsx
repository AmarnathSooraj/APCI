import React from "react";
import "./Registration.css";

function Registration() {
  return (
    <div className="registration-container">
      <h2>Registration Guidelines</h2>
      <ul className="guidelines">
        <li>At least one of the authors of each accepted paper must register for the conference.</li>
        <li>Registration fee includes conference proceedings, conference kit, and refreshments.</li>
        <li>For multiple papers by the same author, separate registration is required for each paper.</li>
        <li>The maximum length of the paper is 6 pages, including references.</li>
      </ul>

      <h2>Registration Fee</h2>
      <table className="fee-table">
        <thead>
          <tr>
            <th>Author</th>
            <th>Fee (Including Tax)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Faculty</td>
            <td>Rs. 2000</td>
          </tr>
          <tr>
            <td>Student</td>
            <td>Rs. 1000</td>
          </tr>
          <tr>
            <td>Industry</td>
            <td>Rs. 3000</td>
          </tr>
          <tr>
            <td>Foreign Delegates</td>
            <td>USD 100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Registration;
