import {useState} from 'react';
import {useMutation} from '@apollo/client';
import {UPDATE_PROJECT} from '../mutations/ProjectMutations';
import {GET_PROJECT} from '../queries/projectQueries';

const EditProjectForm = ({project}) => {
    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [status, setStatus] = useState("new");

    const [updateProject] = useMutation(UPDATE_PROJECT, {
        variables: { id: project.id, name, description, status },
        refetchQueries: [{query: GET_PROJECT, variables: {id: project.id}}]
    });

    const onSubmit = (e) => {
        e.preventDefault();

        if (name === "" || description === "") {
            return alert("Please fill in all fields");
        }

        updateProject(name, description, status);
    }

    return (
        <div className={"mt-5"}>
            <h3>Update Project Details</h3>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="from-label">Name</label>
                    <input type="text" id="name" className="form-control" value={name}
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="from-label">Description</label>
                    <textarea id="description" className="form-control" value={description}
                              onChange={(e) => setDescription(e.target.value)}>
                                    </textarea>
                </div>
                <div className="mb-3">
                    <label className="from-label">Status</label>
                    <select id="status" className="form-select" value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

        </div>
    );
};

export default EditProjectForm;
