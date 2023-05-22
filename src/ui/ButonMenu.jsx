import MenuIcon from '@mui/icons-material/Menu';
import { Navbar } from './Navbar';




export const ButonMenu = () => {

    return (
        <div className=' d-flex justify-content-end p-4 position-absolute end-0'>
            <button className="btn d-md-none d-block close-btn px-1 py-0 text-primary">
                <MenuIcon />
            </button>
        </div>
        )
}
