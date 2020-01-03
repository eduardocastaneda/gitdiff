import { findLatestDate, fetchCommits } from "../lib/helpers/commits";
import { addSecond, formatDate } from "../lib/helpers/date";

function HomePage({ developmentCommits }) {
  const commits = developmentCommits.map((data) => {
    let { message } = data.commit;
    if (message.indexOf("*") > -1) {
      message = message.split("*")[0];
    }

    return {
      message,
      author: data.author.login,
      date: formatDate(data.commit.author.date),
      key: data.commit.author.date
    };
  });

  return (
    <div className="home">
      <h1>Next merge/deploy to Master</h1>
      <ul>
        {commits.map((commit) => {
          return (
            <li key={commit.key}>
              <span className="message">{commit.message}</span>
              <span className="info">
                {commit.author} {commit.date}
              </span>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .home {
          font-family: Helvetica;
        }

        ul {
          padding: 0;
          margin: 0;
        }

        li {
          list-style: none;
          border-radius: 3px;
          background-color: #e8edf0;
          padding: 10px;
          margin-bottom: 10px;
          max-width: 980px;
        }
        .message {
          display: block;
          margin-bottom: 3px;
          font-size: 18px;
          font-weight: bold;
          color: #505450;
        }
        .info {
          display: block;
          font-size: 14px;
          color: #505450;
        }
      `}</style>
    </div>
  );
}

HomePage.getInitialProps = async () => {
  const masterCommits = await fetchCommits(process.env.MASTER_BRANCH);
  const latestCommitDate = findLatestDate(masterCommits);

  const sinceDate = addSecond(latestCommitDate);
  const developmentCommits = await fetchCommits(
    process.env.DEVELOP_BRANCH,
    sinceDate
  );

  return { developmentCommits };
};

export default HomePage;
