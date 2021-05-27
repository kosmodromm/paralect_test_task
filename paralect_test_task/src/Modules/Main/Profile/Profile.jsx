import s from './Profile.module.css';

function Profile(props) {
  return (
    <div className={s.profile}>
      <div className={s.profile_container}>
        <div className={s.avatar}>
          <img src={props.avatar} alt="avatar" />
        </div>
        <div className={s.user_info}>
          <p className={s.user_name}>{props.name}</p>
          <p className={s.user_url}>
            <a href={props.url} target="_blank" rel="noreferrer">
              {props.login}
            </a>
          </p>
          <div className={s.follow_list}>
            <div className={s.followers}>
              <img
                className={s.followers_icon}
                src="/images/followers.png"
                alt="followers"
              />
              <p className={s.followers_count}>{props.followers} followers</p>
            </div>
            <div className={s.following}>
              <img
                className={s.following_icon}
                src="/images/following.png"
                alt="following"
              />
              <p className={s.following_count}>{props.following} following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
