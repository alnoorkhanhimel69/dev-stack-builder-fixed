import { useState } from 'react'
import { Brand } from './Brand'
import { CloseIcon, MenuIcon } from './Icons'

const links = [
  ['Home', '#home'],
  ['Technologies', '#technologies'],
  ['Projects', '#projects'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        <Brand />
        <div className="desktop-nav-links">
          {links.map(([label, href], index) => (
            <a className={index === 0 ? 'active' : ''} href={href} key={label}>{label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="sign-in" href="#contact">Sign In</a>
          <a className="gradient-button sign-up" href="#contact">Sign Up</a>
        </div>
      </nav>
      {open && (
        <div className="mobile-nav container">
          {links.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
