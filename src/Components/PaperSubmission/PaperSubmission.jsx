import React from "react";
import "./PaperSubmission.css";

function PaperSubmission() {
  return (
    <div className="submission-container">
      <h2>Paper Submission Guidelines</h2>
      <p>
        Please follow the formatting instructions and templates from IEEE. Be sure to use the IEEE standard two-column conference paper template.
      </p>
      <p>
        You can download MS Word and LaTeX templates from: 
        <a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">
          IEEE Templates
        </a>
      </p>
      <ul>
        <li>Use the A4 format.</li>
        <li>The maximum length of the paper for review is 6 pages, including references.</li>
        <li>All submitted papers will be peer-reviewed based on their quality and relevance.</li>
        <li>Papers with poor quality and/or high similarity index will be desk rejected (without review).</li>
        <li>InRACS only considers original papers that have not been published or submitted for publication elsewhere.</li>
      </ul>
      <p>
        Full papers can be submitted through: 
        <a href="https://easychair.org/conferences/?conf=inracs25" target="_blank" rel="noopener noreferrer">
          EasyChair Submission
        </a>
      </p>
    </div>
  );
}

export default PaperSubmission;
