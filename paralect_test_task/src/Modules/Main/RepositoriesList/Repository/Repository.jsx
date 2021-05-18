import s from './Repository.module.css';

function Repository(props) {
  return (
    <div className={s.repository}>
      <div className={s.repository_name}>
        <a href={props.repoUrl} target="_blank" rel="noreferrer">
          {props.repoName}
        </a>
      </div>
      <div className={s.repository_info}>{props.repoInfo}</div>
    </div>
  );
}

export default Repository;
