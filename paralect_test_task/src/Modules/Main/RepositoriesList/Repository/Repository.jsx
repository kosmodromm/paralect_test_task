import s from "./Repository.module.css";

function Repository(props) {
  return (
    <div className={s.repository}>
      <div className="repository_name">
        <a href={props.repoUrl}>{props.repoName}</a>
      </div>
      <div className="repository_info"></div>
    </div>
  );
}

export default Repository;
