import Repository from './Repository/Repository';
import Pagination from './Pagination/Pagination';
import s from './RepositoriesList.module.css';

function RepositoriesList() {
  return (
    <div className={s.repositories_list}>
      <p className={s.header}>Repositories (count)</p>
      <div className={s.repositories}>
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />
      </div>
      <div className={s.pagination}>
        <Pagination />
      </div>
    </div>
  );
}

export default RepositoriesList;
