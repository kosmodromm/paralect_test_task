import Profile from './Profile/Profile';
import RepositoriesList from './RepositoriesList/RepositoriesList';
import s from './Main.module.css';

function Main(props) {
  return (
    <div className={s.main}>
      <Profile
        avatar={props.userData.avatar_url}
        name={props.userData.name}
        login={props.userData.login}
        url={props.userData.html_url}
        followers={props.userData.followers}
        following={props.userData.following}
      />
      <RepositoriesList
        login={props.userData.login}
        reposCount={props.userData.public_repos}
        reposData={props.reposData}
        setPage={props.setPage}
        getRepo={props.getRepo}
      />
    </div>
  );
}

export default Main;
