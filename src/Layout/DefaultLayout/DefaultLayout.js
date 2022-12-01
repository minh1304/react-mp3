import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Playing from '../components/Playing';
function DefaultLayout({ children }) {
    return (
        <div>
            <div className="w-[100%] flex ">
                <Sidebar />
                <div className="w-[100%] ">
                    <Header />
                    <div>{children}</div>
                </div>
            </div>
            <div>
                <Playing />
            </div>
        </div>
    );
}

export default DefaultLayout;
