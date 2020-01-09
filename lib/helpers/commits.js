import fetch from "isomorphic-unfetch";

export const findLatestDate = (commits) => {
  if (!commits.length) return;

  const latestCommit = commits.find((commit) => {
    return commit.commit.author.name !== process.env.FILTER_AUTHOR;
  });

  return latestCommit.commit.author.date;
};

export const fetchCommits = async (branch, sinceDate) => {
  const sinceQuery = sinceDate ? `&since=${sinceDate}` : "";
  const result = await fetch(
    `${process.env.GITHUB_REPO}/commits?per_page=100&sha=${branch}${sinceQuery}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    }
  );

  return result.json();
};
