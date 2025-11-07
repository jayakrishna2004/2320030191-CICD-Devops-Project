import React from 'react';

export default function App(){ 
  return (
    <main style={{fontFamily:'Arial, sans-serif', maxWidth:900, margin:'3rem auto'}}>
      <h1>Hi — I'm Your Name</h1>
      <p>This is a cloud-native, containerized portfolio example.</p>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Project  — short description</li>
          <li>Project B — short description</li>
        </ul>
      </section>
      <footer style={{marginTop:40}}>
        <small>Contact: your.email@example.com</small>
      </footer>
    </main>
  )
}
