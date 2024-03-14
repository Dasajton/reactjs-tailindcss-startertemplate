import MenuLink from './MenuLink'

const Navbar = () => {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]
  return (
    <nav className="w-full bg-indigo-300/30">
      <ul className="flex h-16 items-center justify-center space-x-8 text-lg">
        {navLinks.map((link) => (
          <li key={link.to}>
            <MenuLink to={link.to}>{link.label}</MenuLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar
