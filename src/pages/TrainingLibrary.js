
// src/pages/TrainingLibrary.js

import React from 'react';

const TrainingLibrary = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Training Library</h1>
      <p>
        This section will host our exclusive training video series, where you'll learn 
        step-by-step techniques to help your dog succeed. 🐾
      </p>
      <p>
        Access is restricted to members only. If you’ve purchased the training course, 
        please log in to continue.
      </p>
      <p>
        Features coming soon:
      </p>
      <ul>
        <li>🔐 Member-only video lessons</li>
        <li>💬 Comments & community questions</li>
        <li>📺 Progress tracking & video bookmarks</li>
        <li>📧 Ask a trainer feature</li>
      </ul>
      <p style={{ marginTop: '2rem', fontWeight: 'bold' }}>
        Already a member? <a href="/login">Log in here</a>.
      </p>
      <p>
        Not yet a member? <a href="/shop">Purchase the Training Course</a>.
      </p>
    </div>
  );
};

export default TrainingLibrary;
