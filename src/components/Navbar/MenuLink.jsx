import { NavLink } from 'react-router-dom'

const MenuLink = ({ to, children }) => {
  return (
    <NavLink to={to} className="text-slate-100 [&.active]:text-teal-300">
      {children}
    </NavLink>
  )
}
export default MenuLink
