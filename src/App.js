import { Fragment } from 'react'; //Component chỉ để chứa
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './Layout';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout ===null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
        // <div>
        //     <Navbar/>
        //     <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player'>
        //         <DetailSong/>
        //         <ListSong/>
        //     </div>

        // </div>
    );
}

export default App;
