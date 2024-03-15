import { useCallback, useEffect, useMemo, useState } from "react";
import { withHeader } from "../../components/Header";
import useJobs, { Job } from "./hooks/useJobs";

import "./job-board.css";

const jobAmountInterval = 6;

function JobBoardPage() {
  const [jobAmount, setJobAmount] = useState(jobAmountInterval);

  const { jobs, fetchJobInfo } = useJobs();

  const handleFetchMoreJobs = () => {
    if (jobAmount < jobs.length) {
      setJobAmount(jobAmount + jobAmountInterval);
    }
  };

  return (
    <main className="jobs">
      <h1 className="jobs__list-title">Hacker News Jobs Board</h1>
      <div className="jobs__list">
        {jobs.slice(0, jobAmount).map((jobId) => (
          <JobInfo key={jobId} fetchJob={() => fetchJobInfo(jobId)} />
        ))}
      </div>
      {jobAmount < jobs.length && (
        <button onClick={handleFetchMoreJobs} className="jobs__button">
          Load more jobs
        </button>
      )}
    </main>
  );
}

interface JobProps {
  fetchJob: () => Promise<Job | undefined>;
}

function JobInfo(props: JobProps) {
  const { fetchJob } = props;
  const [job, setJob] = useState<Job>();

  const getJobInfo = useCallback(async () => {
    const jobInfo = await fetchJob();

    if (!jobInfo) return;

    setJob(jobInfo);
  }, [fetchJob]);

  const jobDate = useMemo(() => {
    if (!job) return;

    const d = new Date(job.time * 1000);

    const day = String(d.getDay()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = String(d.getFullYear());

    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const seconds = String(d.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
  }, [job]);

  useEffect(() => {
    getJobInfo();
  }, [getJobInfo]);

  if (!job) return null;

  return (
    <div className="jobs__item">
      {job.url ? (
        <a className="jobs__item-title" href={job.url} target="_blank">
          {job.title}
        </a>
      ) : (
        <h2 className="jobs__item-title">{job.title}</h2>
      )}

      <h3 className="jobs__item-metadata">
        By {job.by} - {jobDate}
      </h3>
    </div>
  );
}

export default withHeader(JobBoardPage);
