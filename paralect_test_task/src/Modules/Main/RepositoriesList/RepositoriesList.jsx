import Repository from './Repository/Repository';
import Pagination from './Pagination/Pagination';
import s from './RepositoriesList.module.css';

function RepositoriesList(props) {
  let repoState;
  if (props.reposData.length === 0) {
    repoState = (
      <div className={s.repos_page}>
        <img src="/images/repoEmpty.png" alt="try to search profile"></img>
        <h1>Repository list is empty</h1>
      </div>
    );
  } else {
    repoState = (
      <div>
        <p className={s.header}>Repositories ({props.reposCount})</p>
        <div className={s.repositories}>
          {props.reposData.map((e, index) => {
            return (
              <Repository
                key={index}
                repoName={e.name}
                repoUrl={e.html_url}
                repoInfo={e.description}
              />
            );
          })}
        </div>
        <div className={s.pagination}>
          <Pagination />
        </div>
      </div>
    );
  }

  return <div className={s.repositories_list}>{repoState}</div>;
}

export default RepositoriesList;
