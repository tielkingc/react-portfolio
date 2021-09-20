import React, { useEffect, useState } from "react";
import Axios from 'axios';

function Projects() {
    const [respos, setRepos] = useState([])

    useEffect(() => {
        fetchRepos();
    }, [])

    const fetchRepos = async() => {
        const response = await Axios('https://api.github.com/users/tielkingc/repos?per_page=50');
        setRepos(response.data)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
            {respos &&
                respos.map((repo) => (
                    <div className="col-2 repo">
                        <div>
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="repoTitle">{repo.name}</a><br/>
                        </div>
                    </div>
                ))}
                <div className="col-2 repo">
                        <div>
                        <a href="https://github.com/esherrow/SL-warehouse" target="_blank" rel="noreferrer" className="repoTitle">S&L Warehouse</a><br/>
                        <a href="https://sl-warehouse.herokuapp.com/" target="_blank" rel="noreferrer" className="deploy">Deployed Site</a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Projects;
