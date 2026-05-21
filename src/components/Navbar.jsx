import { NavLink } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/prices', label: 'Prices' },
  { path: '/contact', label: 'Contact' }
]

function Navbar() {
  return (
    <header className="app-navbar">
      <div className="brand">Nailes Studio</div>
      <nav>
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
