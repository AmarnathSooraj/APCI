import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>For more information, contact us at:</p>
      <p><strong>Email:</strong> <a href="mailto:inracs-2025@cev.ac.in">inracs-2025@cev.ac.in</a></p>
      <p><strong>Website:</strong> <a href="http://www.cev.ac.in" target="_blank" rel="noopener noreferrer">www.cev.ac.in</a></p>
      <p><strong>Conference Website:</strong> <a href="https://www.inracs2025.in/" target="_blank" rel="noopener noreferrer">www.inracs2025.in</a></p>

      <h3>General Chair</h3>
      <ul>
        <li>Dr. C K Smitha – <a href="tel:+919747605515">9747605515</a></li>
        <li>Prof. Ragi R G – <a href="tel:+919747054045">9747054045</a></li>
      </ul>

      <h3>Publication Chair</h3>
      <ul>
        <li>Prof. Priyanka P – <a href="tel:+919961441105">9961441105</a></li>
      </ul>

      <h3>Paper Submission Guidelines</h3>
      <p>Please follow the formatting instructions and templates from IEEE. Be sure to use the IEEE standard two-column conference paper template.</p>
      <p>You can download MS Word and Latex templates from:</p>
      <p><a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Paper Templates</a></p>
      <p><strong>Submission Requirements:</strong></p>
      <ul>
        <li>Use the A4 format.</li>
        <li>Maximum length: 6 pages (including references).</li>
        <li>All submitted papers will be peer-reviewed based on quality and relevance.</li>
        <li>Papers with poor quality or high similarity index will be desk rejected (without review).</li>
        <li>InRACS only accepts original papers that have not been published or submitted elsewhere.</li>
      </ul>
      <p><strong>Full papers can be submitted through:</strong> <a href="#">#link</a></p>
    </div>
  );
}

export default Contact;
