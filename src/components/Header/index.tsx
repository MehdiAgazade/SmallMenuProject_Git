import { navLinks } from '@/types/navlinks'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='header'>
      {
        navLinks.map(({id, to, title}) => {
            return <Link key={id} href={to}>{title}</Link>
        })
      }
    </div>
  )
}

export default Header
