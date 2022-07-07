import {Link, useParams} from "react-router-dom";
import Spinner from "../components/Spinner";
import {useQuery} from "@apollo/client";
import {GET_PROJECT} from "../queries/projectQueries";

const Project = () => {
    const {id} = useParams();

    const {loading, error, data} = useQuery(GET_PROJECT, {variables: {id}});
    console.log("Project data:", data);

    if (loading) return <Spinner/>;
    if (error) return <p>Something Went Wrong</p>;

    return (
        <>
            {
                !loading && !error && (
                    <div className="mx-auto w-75 card p-5">
                        <Link to="/" className="btn btn-light btn-sm w-25 d-inline mx-auto">Back</Link>
                    </div>
                )
            }
        </>
    );
};

export default Project;
