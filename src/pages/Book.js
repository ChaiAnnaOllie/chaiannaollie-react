import React from 'react';

function Book() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Our Book</h1>
      <h2>The Dog’s Prayer: Lead Us Not Into Boredom, But Into Fun</h2>
      <p>
        A Guide to Canine Enrichment & Healthy Homemade Treats to Help Your Dog Live a Long, Happy Life
      </p>
      <p>
        Discover tips, recipes, and enrichment activities that will help your pup thrive. Our book combines professional training insight with everyday fun.
      </p>
      <p>
        You can purchase the book now through Amazon:
      </p>
      <a 
        href="https://www.amazon.com/your-book-link" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#1a73e8' }}
      >
        Buy on Amazon
      </a>
    </div>
  );
}

export default Book;