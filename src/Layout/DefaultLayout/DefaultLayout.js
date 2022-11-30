import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
function DefaultLayout({ children }) {
    return (
        <div className="grid grid-cols-8 ">
            <Sidebar />
            <div className='col-span-7 '>
                <Header />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
