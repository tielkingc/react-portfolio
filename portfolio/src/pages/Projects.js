import React, { useEffect, useState } from "react";
import Axios from 'axios';

function Projects() {
    const [respos, setRepos] = useState([])

    useEffect(() => {
        fetchRepos();
    }, [])

    const fetchRepos = async() => {
        const response = await Axios('https://api.github.com/users/tielkingc/repos');
        setRepos(response.data)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
            {respos &&
                respos.map(repo => (
                    <div className="col-2 repo">
                        <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a><br/>
                        <a href={repo.homepage} target="_blank" rel="noreferrer">Deployed Site</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;