import Navbar from './navbar';
import Menu from './menu';

export default function Header() {
    return (
        <header className='fixed top-4 left-1/2 -translate-x-1/2 z-50  w-full max-w-7xl flex justify-center items-end flex-col'>
            <Navbar />
            {/* <Menu /> */}
        </header>
    )
}