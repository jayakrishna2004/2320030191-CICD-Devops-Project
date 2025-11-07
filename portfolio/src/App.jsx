import React from 'react';

export default function App() {
  return (
    <main
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: 900,
        margin: '3rem auto',
        padding: '1rem',
        lineHeight: 1.6,
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>
          Hi 👋 — I'm <span style={{ color: '#0078d7' }}>Kalisiti Jayakrishna</span>
        </h1>
        <p>
          A passionate <strong>DevOps & Cloud Enthusiast</strong> with internship experience at
          <strong> IBM</strong> and <strong>VaultofCodes</strong>. Skilled in full-stack development,
          AI, and cloud technologies.
        </p>
      </header>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ borderBottom: '2px solid #0078d7', paddingBottom: '0.3rem' }}>About Me</h2>
        <p>
          I’m currently pursuing a <strong>B.Tech in Computer Science Engineering</strong> at
          KLH University (CGPA: 9.76). I enjoy building scalable, cloud-native solutions using
          Docker, Kubernetes, and CI/CD pipelines.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ borderBottom: '2px solid #0078d7', paddingBottom: '0.3rem' }}>
          Skills ⚙️
        </h2>
        <ul>
          <li>Programming: Java, Python, C, SQL, JavaScript</li>
          <li>Frameworks: React.js, Node.js, Spring Boot</li>
          <li>Cloud & DevOps: AWS, Oracle Cloud, Docker, Kubernetes, Linux</li>
          <li>Web Technologies: HTML, CSS, JSP, JDBC</li>
          <li>Other: IoT, Data Structures, Git/GitHub</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ borderBottom: '2px solid #0078d7', paddingBottom: '0.3rem' }}>
          Projects 🚀
        </h2>
        <div style={{ display: 'grid', gap: '1.2rem' }}>
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h3>🌐 Cloud-Native Portfolio</h3>
            <p>
              A React web app containerized with Docker and deployed via a CI/CD pipeline using
              GitHub Actions.
            </p>
            <a
              href="https://hub.docker.com/repository/docker/jayakrishna9/cloud-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Docker Hub →
            </a>
          </div>

          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h3>🧠 AI-Based Disk Scheduling in OS</h3>
            <p>
              Implemented an AI-driven disk scheduling algorithm to optimize I/O operations and
              minimize seek time.
            </p>
          </div>

          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h3>🛒 E-Comm Velocity</h3>
            <p>
              Developed a real-time e-commerce platform with inventory tracking and vendor
              collaboration using React.js and Spring Boot.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ borderBottom: '2px solid #0078d7', paddingBottom: '0.3rem' }}>
          Certifications 🎓
        </h2>
        <ul>
          <li>AWS Certified Cloud Practitioner</li>
          <li>Oracle Cloud Infrastructure2024 Generative AI Certified Professional</li>
          <li>Oracle Cloud Infrastructure 2025 Certified Architect Associate</li>
          <li>Spring MVC for Developers — Best Practices</li>
          <li>Java Database Connectivity (JDBC) Introduction</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ borderBottom: '2px solid #0078d7', paddingBottom: '0.3rem' }}>Education 🎓</h2>
        <ul>
          <li>
            <strong>KLH University</strong> — B.Tech in Computer Science Engineering (2023-2027) |
            CGPA: 9.76
          </li>
          <li>
            <strong>Mahendra Junior College</strong> — MPC (2021-2023) | 96%
          </li>
          <li>
            <strong>Sri Jagannath High School</strong> — SSC (2020-2021) | 61%
          </li>
        </ul>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.9rem' }}>
        <p>📧 Email: <a href="mailto:jayakrishnakalisiti9@gmail.com">jayakrishnakalisiti9@gmail.com</a></p>
        <p>📞 Phone: +91 7854886151</p>
        <p>
          🔗 LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/kalisiti-jayakrishna"
            target="_blank"
            rel="noopener noreferrer"
          >
            kalisiti-jayakrishna
          </a>
        </p>
        <p>
          💻 GitHub:{' '}
          <a
            href="https://github.com/jayakrishna2004"
            target="_blank"
            rel="noopener noreferrer"
          >
            jayakrishna2004
          </a>
        </p>
        <p>
          🧑‍💻 Coding Profiles:{' '}
          <a href="https://leetcode.com/u/jayakrishna9/" target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>{' '}
          |{' '}
          <a href="https://www.codechef.com/users/jayakrishna9" target="_blank" rel="noopener noreferrer">
            CodeChef
          </a>{' '}
          |{' '}
          <a href="https://codeforces.com/profile/jayakrishna9" target="_blank" rel="noopener noreferrer">
            Codeforces
          </a>{' '}
          |{' '}
          <a href="https://www.hackerrank.com/profile/jayakrishna9" target="_blank" rel="noopener noreferrer">
            HackerRank
          </a>
        </p>
        <p style={{ marginTop: '1rem', color: '#555' }}>
          © 2025 Jayakrishna — Cloud Portfolio Project
        </p>
      </footer>
    </main>
  );
}
