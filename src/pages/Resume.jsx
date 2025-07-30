function Resume() {
  const certifications = [
    { label: 'Bloomberg Market Concepts', file: 'cert-bloomberg.pdf' },
    { label: 'Google Data Analytics', file: 'cert-google-data.pdf' },
    { label: 'DataCamp dplyr', file: 'cert-datacamp-dplyr.pdf' },
    { label: 'DataCamp ggplot2', file: 'cert-datacamp-ggplot2.pdf' },
    { label: 'DataCamp Intermediate R', file: 'cert-datacamp-intermediate.pdf' },
    { label: 'CFI FMVA', file: 'cert-fmva.pdf' },
    { label: 'Columbia Machine Learning', file: 'cert-columbia-ml.pdf' },
  ];

  return (
    <div>
      <h1>Resume</h1>
      <p>You can view or download my full resume using the link below:</p>
      <a
        href="https://docs.google.com/document/d/1DJE0K8YW557yiEXnC6714HlwsYG4mzd9/edit?usp=sharing&ouid=103287810301603708658&rtpof=true&sd=true"
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

      <div style={{ marginTop: '3rem' }}>
        <h2>Highlights</h2>

        <h3>Skills</h3>
        <ul>
          <li>R, Python, Julia, MATLAB, Microsoft Office, SQL</li>
        </ul>

        <h3>Certifications</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {certifications.map(({ label, file }) => (
            <li key={file} style={{ marginBottom: '3rem' }}>
              <strong>{label}</strong>
              <div style={{ marginTop: '0.5rem' }}>
                <iframe
                  src={`/${file}`}
                  title={label}
                  style={{
                    width: '100%',
                    maxWidth: '800px',
                    height: '500px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                  }}
                />
              </div>
              <a
                href={`/${file}`}
                download
                style={{
                  display: 'inline-block',
                  marginTop: '0.5rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  borderRadius: '4px',
                  textDecoration: 'none',
                }}
              >
                Download PDF
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Resume;