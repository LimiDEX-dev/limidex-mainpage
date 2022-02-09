import { FC } from 'react';
import s from './style.module.css';

export const Navigation: FC = () => (
  <ul className={s.List}>
    <li className={s.Item}>
      <a href="https://digit-alex.gitbook.io/documentation-limidex/" className={s.Link} target="_blank" rel="noreferrer">
        Docs
      </a>
    </li>
    <li className={s.Item}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="" className={s.Link} onClick={(event) => event.preventDefault()}>
        Launch soon
      </a>
    </li>
  </ul>
);
