import Repository from './Repository/Repository';
import s from './RepositoriesList.module.css';
import ReactPaginate from 'react-paginate';

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
                key={index + 1 + 3 * props.initialPage}
                repoName={e.name}
                repoUrl={e.html_url}
                repoInfo={e.description}
              />
            );
          })}
        </div>
        <div className={s.pagination}>
          <p>
            {props.initialPage + 1 + 3 * props.initialPage} -{' '}
            {Math.min(4 * (props.initialPage + 1), props.reposCount)} of{' '}
            {props.reposCount} items
          </p>
          <ReactPaginate
            initialPage={props.initialPage}
            disableInitialCallback={true}
            pageCount={Math.ceil(props.reposCount / 4)}
            previousLabel={''}
            nextLabel={''}
            breakLabel={'...'}
            breakClassName={s.break_me}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={(e) => {
              props.setPage(e.selected);
            }}
            // onPageActive={(e) => console.log(e)}
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
