import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const { _id, title, jobType, description, company_logo } = job;

  return (
    <div className="card bg-base-100 shadow-xl py-12">
      <figure>
        <img src={company_logo} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-info">{jobType}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`} className="btn btn-info">
            Apply
          </Link>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object,
};

export default JobCard;
