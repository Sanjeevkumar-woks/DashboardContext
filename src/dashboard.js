import React from 'react'
import { Link } from 'react-router-dom'
import { useData } from './App'
import UserList from './userList'

function Dashboard() {
    let {data} = useData()
    return (
        <div className="App">
            <h1>Dashboard</h1>
            <hr/>
                <div className='users'>
                    <h1><Link to="/users" style={{textDecoration:"none"}} > Users </Link>- {data.length} </h1> 
                </div>
             <UserList/>    
        </div>
    );
}

export default Dashboard
