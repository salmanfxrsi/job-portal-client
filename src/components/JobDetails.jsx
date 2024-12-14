import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = useLoaderData();

  return (
    <div className="p-8 bg-white rounded-lg shadow-xl max-w-3xl mx-auto space-y-8 mt-12 mb-24">
      {/* Header with Company Info */}
      <div className="flex items-center space-x-6 mb-8">
        <img
          src={company_logo}
          alt={`${company} Logo`}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="font-semibold text-gray-500">{company} - {location}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="space-y-4">
        <p><strong className="font-bold text-gray-700">Category:</strong> {category}</p>
        <p><strong className="font-bold text-gray-700">Job Type:</strong> {jobType}</p>
        <p><strong className="font-bold text-gray-700">Status:</strong> {status}</p>
        <p><strong className="font-bold text-gray-700">Application Deadline:</strong> {applicationDeadline}</p>
      </div>

      {/* Salary Range */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-black">Salary</h2>
        <p className="text-gray-700 font-semibold">{salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()} / month</p>
      </div>

      {/* Job Description */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-black">Description</h2>
        <p className="text-gray-700 font-semibold
        ">{description}</p>
      </div>

      {/* Requirements */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-black">Requirements</h2>
        <ul className="list-disc ml-6 text-gray-700 font-semibold">
          {requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-black">Responsibilities</h2>
        <ul className="list-disc ml-6 text-gray-700 font-semibold">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      {/* HR Contact */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-black">Contact HR</h2>
        <p><strong className="text-gray-700">Name:</strong> {hr_name}</p>
        <p>
          <strong className="text-gray-700 font-semibold">Email:</strong>{' '}
          <a href={`mailto:${hr_email}`} className="font-semibold">{hr_email}</a>
        </p>
      </div>

      {/* apply now button */}
      <Link to={''} className='btn btn-info'>Apply Now</Link>
    </div>
  );
};

export default JobDetails;
