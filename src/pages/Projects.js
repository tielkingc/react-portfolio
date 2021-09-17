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
                respos.map((repo, i) => (
                    <div className="col-2 repo" style={{ "--img": `url('https://picsum.photos/300?random=${i}')` }}>
                        <div>
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="repoTitle">{repo.name}</a><br/>
                        <a href={repo.homepage} target="_blank" rel="noreferrer" className="deploy">Deployed Site</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;