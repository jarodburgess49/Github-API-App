import React ,{useEffect,useState} from 'react';
import {ListGroup,ListGroupItem} from "reactstrap"
import Axios from "axios"

const Repos = ({repos_url}) =>{
    const [repos , setRepos] = useState([])

    const fetchRepos = async ()=>{

        const {data} = await Axios.get(repos_url)
        setRepos(data)
    }
    useEffect(()=>{fetchRepos()},[repos_url])
    return(
        <ListGroup>
        {repos.map(repo =>(
            <ListGroupItem  className="shadow" key={repo.id}>
             <div className="text-uppercase text-primary">{repo.name}</div> 
             <div className="text-secondary">{repo.description}</div>
             <div className="text-info">{repo.language}</div>  

            </ListGroupItem>
        ))}
        </ListGroup>

    )


}
export default Repos;