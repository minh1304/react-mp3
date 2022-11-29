import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
function DefaultLayout({ children }) {
    return (
        // <div className="grid grid-cols-5">
        //     <Header/>
        //     <div className="flex">
        //         <Sidebar/>
        //         <div>
        //             {children}
        //         </div>
        //     </div>
        // </div>
        <div className="grid grid-cols-6">
            <Sidebar />
            <div className="col-span-5 bg-slate-400">
                <Header/>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
