import { useEffect, useState } from "react";

export interface Job {
  by: string;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export default function useJobs() {
  const [jobs, setJobs] = useState<string[]>([]);

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );

      if (!response.ok) {
        throw new Error("Response Error");
      }

      const data = await response.json();

      setJobs(data);
    } catch (error) {
      console.error("FETCH JOBS ERROR", error);
    }
  };

  const fetchJobInfo = async (id: string) => {
    console.log("Fetch Job Info", id);
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );

      if (!response.ok) {
        throw new Error("Response Error");
      }

      const data = await response.json();

      return data as Job;
    } catch (error) {
      console.error("FETCH JOBS INFO ERROR", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return {
    jobs,
    fetchJobInfo,
  };
}
