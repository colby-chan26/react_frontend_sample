import React from 'react'
import { useEffect, useState } from 'react'
import logo from '../levvel-logo.svg'
import UserPreview from '../Components/UserPreview'

function Home(props) {


  const [users, setUsers] = useState([]);   

  useEffect(() => {

    const getUsers = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        console.log(data);
        setUsers(data);
    }

    getUsers();

  }, [])
      
  return (
    <div className="Wrapper">
      <div className="Container">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            <h1>Author's Blog</h1>
            <hr/>
        </div>

        <div className="User-Container">
        {users.map((user, index) => {
            return(
                <UserPreview user={user}/>    
            )
        })}
        </div>
      </div>
    </div>
  )
}

export default Home
