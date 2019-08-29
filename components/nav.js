import React, { useState } from 'react';
import Link from 'next/link'


const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => {
  const [active, setActive] = useState(false)

  return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link href='/'>
            <a className="navbar-item">
              <img src="/static/otter.png" />
            </a>
          </Link>

          <a onClick={() => setActive(!active)} role="button" className={`navbar-burger burger ${ active ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${ active ? "is-active" : ""}`}>
          <ul className="navbar-start">
            {links.map(({ key, href, label }) => (
              <li className="navbar-item" key={key}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
  )
}

export default Nav
