import React from 'react'
import { getCurrentUser } from '../services/auth.service'

const Profile = () => {
    const currentUser = getCurrentUser()

    return (
        <div className ="container">
            <header classname="jumbotron"> 
                <h3> 
                    <strong> {currentUser.username} </strong>
                </h3>
            </header>
         <p> 
             <strong> Token: </strong> {currentUser.accessToken.substring(0, 20)}...{" "}
         </p>
         <p> 
             <strong> Id: </strong> {currentUser.id}
         </p>
         <p>
             <strong> email: </strong> {currentUser.email} 
         </p>

{/* if current user has roles, such as user or admin, map thru the roles */}
         {currentUser.roles &&
            currentUser.roles.map((role, index)=> <li key={index}> {role} </li>)
        }
        </div>
    )
}

export default Profile
