import s from './Profile.module.css';

function Profile() {
  return (
    <div className={s.profile}>
      <div>
        <div className={s.avatar}>
          <img src="/images/profileimage.png" alt="avatar" />
        </div>
        <div>
          <p className={s.user_name}>Name</p>
          <p className={s.user_url}>
            <a href="https://github.com">name-link</a>
          </p>
          <div className={s.follow_list}>
            <div className={s.followers}>
              <img
                className={s.followers_icon}
                src="/images/followers.png"
                alt="followers"
              />
              <p className={s.followers_count}>1 followers</p>
            </div>
            <div className={s.following}>
              <img
                className={s.following_icon}
                src="/images/following.png"
                alt="following"
              />
              <p className={s.following_count}>1 following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
