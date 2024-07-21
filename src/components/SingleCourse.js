import { useParams } from "react-router-dom"

const SingleCourse = () => {
    const { id } = useParams()

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Course Name</h5>
                <p className="card-text">{id}</p>
            </div>
        </div>
    )
}
export default SingleCourse