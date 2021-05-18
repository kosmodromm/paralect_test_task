import Repository from './Repository/Repository';
import s from './RepositoriesList.module.css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

function RepositoriesList(props) {
  let [page, setPage] = useState(1);

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
                key={index + 1 + 3 * (page - 1)}
                repoName={e.name}
                repoUrl={e.html_url}
                repoInfo={e.description}
              />
            );
          })}
        </div>
        <div className={s.pagination}>
          <p>
            {page + 3 * (page - 1)} - {4 * page} of {props.reposCount} items
          </p>
          <ReactPaginate
            pageCount={Math.floor(props.reposCount / 4)}
            previousLabel={''}
            nextLabel={''}
            breakLabel={'...'}
            breakClassName={s.break_me}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={(e) => {
              setPage(e.selected + 1);
              props.setPage(e.selected + 1);
              props.getRepo(props.login);
            }}
            onPageActive={(e) => console.log(e)}
            activeClassName={s.active}
            containerClassName={s.pagination_wrapper}
            pageClassName={s.pagination_page}
            pageLinkClassName={s.pagination_page_link}
            activeLinkClassName={s.active_link}
            previousClassName={s.previous}
            nextClassName={s.next}
            previousLinkClassName={s.previous_link}
            nextLinkClassName={s.next_link}
            disabledClassName={s.disabled}
          />
        </div>
      </div>
    );
  }

  return <div className={s.repositories_list}>{repoState}</div>;
}

export default RepositoriesList;
