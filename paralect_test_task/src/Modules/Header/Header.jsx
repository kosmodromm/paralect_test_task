import s from './Header.module.css';

function Header() {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <a href="https://github.com">
          <img
            className={s.github_logo}
            src="/images/githublogo.png"
            alt="github"
          />
        </a>
      </div>
      <div className={s.input_field}>
        <img src="/images/search.png" alt="search" />
        <input type="text" />
      </div>
    </div>
  );
}

export default Header;
