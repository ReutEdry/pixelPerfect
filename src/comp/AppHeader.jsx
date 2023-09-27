import { Link, NavLink } from 'react-router-dom'
import myTeam from '../assets/imgs/myteam.png'

export function AppHeader() {
    return (
        <header className='app-header main-layout'>
            <section className='app-header-container'>
                <nav className='nav-links'>
                    <Link className='logo' to='/'>
                        <img src={myTeam} alt="" />
                    </Link>
                    <NavLink to='/'>home</NavLink>
                    <NavLink className="about" to='/about'>about</NavLink>
                </nav>
                <button className='contact-us-btn'>contact us</button>
            </section>
        </header>
    )
}
