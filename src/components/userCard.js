import React from 'react';
import {Card,CardBody} from "reactstrap"


const UserCard = ({user}) =>{
    return(
        <Card className="mt-3 mb-4 shadow">
            <img alt="text" className="img-rounded" src={user.avatar_url}/>
            <CardBody>
    <div className="text-primary text-uppercase">{user.name}</div>
    <div className="text-primary text-uppercase">LOCATION:{user.location}</div>
    <div className="text-primary text-uppercase">FOLLOWERS:{user.followers}</div>
    

            </CardBody>

        </Card>
    )


}
export default UserCard;