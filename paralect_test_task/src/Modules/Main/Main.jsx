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
        reposCount={props.userData.public_repos}
        reposData={props.reposData}
      />
    </div>
  );
}

export default Main;
