import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

const JobsLayout = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://job-portal-server-murex.vercel.app/jobs")
      .then((res) => res.json())
      .then((result) => {
        setJobs(result);
      });
  }, []);

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 py-24 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default JobsLayout;
