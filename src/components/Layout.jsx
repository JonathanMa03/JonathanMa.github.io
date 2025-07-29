import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1e1e1e', color: 'white' }}>
      {/* Full-width navbar */}
      <nav style={{
        width: '100%',
        backgroundColor: '#000',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
      }}>
        <NavLink to="/" style={navLinkStyle}>Home</NavLink>
        <NavLink to="/about" style={navLinkStyle}>About</NavLink>
        <NavLink to="/projects" style={navLinkStyle}>Projects</NavLink>
        <NavLink to="/resume" style={navLinkStyle}>Resume</NavLink>
        <NavLink to="/contact" style={navLinkStyle}>Contact</NavLink>
      </nav>

      {/* Main content centered */}
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '2rem',
      }}>
        <div style={{ width: '100%', maxWidth: '900px' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function navLinkStyle({ isActive }) {
  return {
    color: isActive ? 'white' : '#bbb',
    textDecoration: isActive ? 'underline' : 'none',
    fontWeight: isActive ? 'bold' : 'normal',
  };
}

export default Layout;