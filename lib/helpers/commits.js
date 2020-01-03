import fetch from "isomorphic-unfetch";

export const findLatestDate = (commits) => {
  if (!commits.length) return;

  const latestCommit = commits[0];

  return latestCommit.commit.author.date;
};

export const fetchCommits = async (branch, sinceDate) => {
  const sinceQuery = sinceDate ? `&since=${sinceDate}` : "";
  const result = await fetch(
    `https://api.github.com/repos/eduardocastaneda/timereporting/commits?per_page=100&sha=${branch}${sinceQuery}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    }
  );

  return result.json();
};
