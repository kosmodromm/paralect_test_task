import s from './Header.module.css';
import React, { useCallback, useState } from 'react';

function Header(props) {
  const [input, setValue] = useState('');

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        props.getUser(`${input}`);
        props.getRepo(`${input}`);
        setValue('');
      }
    },
    [input, props]
  );

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
        <input
          type="text"
          value={input}
          className="input"
          placeholder="type to search github user"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
}

export default Header;
