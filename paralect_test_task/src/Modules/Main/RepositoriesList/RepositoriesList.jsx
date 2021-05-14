import Repository from "./Repository/Repository";
import Pagination from "./Pagination/Pagination";
import s from "./RepositoriesList.module.css";

function RepositoriesList(props) {
  return (
    <div className={s.repositories_list}>
      <p className={s.header}>Repositories ({props.reposCount})</p>
      <div className={s.repositories}>
        <Repository />
        {/* {props.reposData.map((e) => {
          <Repository repoName={e.name} repoUrl={e.html_url} />;
        })} */}
      </div>
      <div className={s.pagination}>
        <Pagination />
      </div>
    </div>
  );
}

export default RepositoriesList;
