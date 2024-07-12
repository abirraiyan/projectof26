import { useEffect, useState } from "react";
import Card from "./Component/Card";
import Navbar from "./Component/Navbar";

 function App() {
    const [user, setUser] =useState([]);
    const [loading, setLoading] =useState([null])

    const getUser= () => {
        setLoading(true);
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data) => {
            setUser(data.users);
            setLoading(false);
        });
    };
    useEffect(() => {
        getUser();
    },[]);
    console.log(user);
  return (
    <>
    {/* navbar */}
    <Navbar/>
    <div className="container mx-auto mt-5 flex gap-3 flex-wrap justify-center">
    {loading ? (
       <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <>
            {user.map((user) => (
            <Card key={user.id} userInfo={user}/>
            ))}
          </>
        )}
    </div>
   
    </>
  );
}

export default App;