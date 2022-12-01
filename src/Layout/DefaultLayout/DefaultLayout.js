import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Playing from '../components/Playing';
function DefaultLayout({ children }) {
    return (
        <div>
            <div className="grid md:grid-cols-7">
                <Sidebar />
                <div className="md:col-span-6">
                    <Header />
                    <div>{children}</div>
                </div>
            </div>
            <div className='w-[100%]'>
                <Playing />
            </div>
        </div>
    );
}

export default DefaultLayout;
