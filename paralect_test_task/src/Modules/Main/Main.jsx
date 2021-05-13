import Profile from './Profile/Profile';
import RepositoriesList from './RepositoriesList/RepositoriesList';
import s from './Main.module.css';

function Main() {
  return (
    <div className={s.main}>
      <Profile />
      <RepositoriesList />
    </div>
  );
}

export default Main;
