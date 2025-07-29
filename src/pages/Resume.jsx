function Resume() {
    return (
      <>
        <h1>Resume</h1>
        <p>You can view or download my full resume using the link below:</p>
        <a
          href="https://docs.google.com/document/d/your-resume-link"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '6px',
            textDecoration: 'none',
          }}
        >
          View Resume (Google Doc)
        </a>
      </>
    );
  }
  
  export default Resume;