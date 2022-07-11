import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div className="col-md-6">
            <div className={`card mb-3 bg-opacity-50 bg-${project.status === 'Completed' ? 'success bg-gradient' : project.status === 'In Progress' ? 'warning bg-gradient' : "light bg-gradient"}`}>
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                        <h5 className="card-title">{project.name}</h5>

                        <a href={`/projects/${project.id}`} className="btn light">
                            View
                        </a>
                    </div>
                    <p className="small">Status: <strong>{project.status}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
