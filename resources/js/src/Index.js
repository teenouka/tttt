import React, {useEffect, useState}from 'react';
import ReactDOM from 'react-dom';
import HomeNavbar from './components/HomeNavbar'
import Home from './page/Home'
import Analyst from './page/Analyst'
import NotFoundPage from './page/NotFoundPage'
import { BrowserRouter ,Routes, Route, Link} from "react-router-dom";
function App() {
    // list รายชื่อสมาชิก สอ. 15 คน
    const [userlist, setUserlist] = useState();

    const userdata_URI = "/api/userdata";

    // ทำงานตอน component ถูกเรียกใช่้งาน
    useEffect(() => {
        //
        feed_data();
        async function feed_data() {
            const requestUser = await fetch(userdata_URI, {
                headers: {
                    Accept: "application/json",
                    ContentType: "application/json",
                },
            }).then((response) => {
                return response.json();
            });
            await setUserlist(requestUser);
        }
    }, []);
    console.log(userlist);
    return (
        <BrowserRouter>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <HomeNavbar />
                </div>
                <div className="col-12">
                    <Routes>
                        <Route path="home" element={<Home />} />
                        <Route path="analyst" element={<Analyst />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
                {/* <div className="text-center col-lg-12 my-4">
                    <h1>รายชื่อสมาชิก</h1>
                </div>
                <div>
                    <ul>
                        {userlist &&
                            userlist[0] &&
                            userlist.map((val, i) => {
                                return <li key={i}>{val.MEMBER_NAME}</li>;
                            })}
                    </ul>
                </div> */}
            </div>
        </div>
        </BrowserRouter>
    );
}
export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}