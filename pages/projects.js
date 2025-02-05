import React from 'react';

export default function Projects() {
  return (
    <div style={{ padding: '2rem', color: 'white', backgroundColor: 'black', textAlign: 'center' }}>
      <h1>Projects</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '1rem 0' }}>
          <strong>Raph's Quarter Countdown</strong> – A web application that counts down to a special event.
          Visit it{' '}
          <a 
            href="http://raphsquartercountdown.xyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#61dafb', textDecoration: 'underline' }}
          >
            here
          </a>.
        </li>
      </ul>
    </div>
  );
}
