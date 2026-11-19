'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [{ label: 'Home', href: '/' }, { label: 'About', href: '/#about' }, { label: 'Our space', href: '/#space' }, { label: 'Amenities', href: '/#amenities' }, { label: 'Gallery', href: '/#gallery' }, { label: 'Contact', href: '/#contact' }]

export function SiteHeader({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false)
  return <>
    <header className={`site-header${light ? ' site-header-light' : ''}`}><Link href="/" className="brand"><span className="brand-mark">LF</span><span><b>LADY FUNKY</b><small> AIRBNB · STAY. RELAX. FEEL AT HOME.</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}</nav>
      <div className="header-actions"><Link className="button button-dark header-book" href="/booking">Book your stay <ArrowUpRight size={15}/></Link><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div>
    </header>
    {open && <div className="menu-overlay"><div className="menu-top"><span> Lady Funky</span><button aria-label="Close menu" onClick={() => setOpen(false)}><X/></button></div><nav>{[{label:'Home',href:'/'},{label:'About us',href:'/#about'},{label:'Our space',href:'/#space'},{label:'Amenities',href:'/#amenities'},{label:'Gallery',href:'/#gallery'},{label:'Guest reviews',href:'/reviews'},{label:'Location',href:'/#location'},{label:'Contact',href:'/#contact'},{label:'Book your stay',href:'/booking'}].map((x,i)=><Link key={x.label} href={x.href} onClick={()=>setOpen(false)}><span>0{i+1}</span>{x.label}<ArrowUpRight size={18}/></Link>)}</nav><p>Ayetoro Estate · Iwo, Osun State</p></div>}
  </>
}

export function SiteFooter() { return <footer className="site-footer" id="contact"><div className="footer-main"><div><Link href="/" className="brand footer-brand"><span className="brand-mark">LF</span><span><b>LADY FUNKY</b><small> AIRBNB · STAY. RELAX. FEEL AT HOME.</small></span></Link><p>A slower kind of stay, made for feeling at home.</p></div><div className="footer-address"><span className="eyebrow">COME FIND US</span><p>Ayetoro Estate, Ori Eru<br/>Iwo, Osun State, Nigeria<br />08061631674</p><a href="https://maps.google.com/?q=Ayetoro+Estate+Ori+Eru+Iwo+Osun+State+Nigeria" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15}/></a></div><div className="footer-links"><span className="eyebrow"></span><Link href="/booking">Book a stay</Link><Link href="/reviews">Guest reviews</Link></div></div><div className="footer-bottom"><span>© 2026 Lady Funky Airbnb</span><span>Made for rest, rooted in hospitality.</span></div></footer> }
