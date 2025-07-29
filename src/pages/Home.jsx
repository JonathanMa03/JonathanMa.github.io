function Home() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="/me.jpg"
            alt="Jonathan Y. Ma"
            className="profile-pic"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '3px solid white',
              objectFit: 'cover',
            }}
          />
        </div>
  
        <h1>Jonathan Y. Ma</h1>
        <h2>
          Data-Driven Problem Solver | Finance & Economics | Industrial Engineering • Applied Statistics • Operations Research
        </h2>
  
        <p style={{ marginTop: '1.5rem' }}>
          I’m a Finance and Economics graduate with a strong foundation in Applied Mathematics,
          currently pursuing a Master’s in Engineering at Johns Hopkins. My work bridges Industrial Engineering,
          Statistics, and OR, focused on solving real-world problems through data, modeling, and optimization.
        </p>
  
        <p>
          <strong>Interests:</strong> Financial Modeling, Statistical Modeling and Simulation, Econometrics, Inventory Tracking
        </p>
      </div>
    );
  }
  
  export default Home;