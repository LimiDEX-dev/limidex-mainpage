import { FC } from 'react';
import s from './style.module.css';
import {
  GitlabIcon,
  MediumIcon,
  TelegramIcon,
  TwitterIcon,
} from '../../lib/icons';

export const SocialList: FC = () => (
  <ul className={s.List}>
    <li className={s.Item}>
      <a
        href="https://t.me/limex_protocol"
        className={s.Link}
        aria-label="Our telegram channel"
        target="_blank"
        rel="noreferrer"
      >
        <TelegramIcon />
      </a>
    </li>
    <li className={s.Item}>
      <a
        href="https://twitter.com/Limex_Protocol"
        className={s.Link}
        aria-label="Our twitter channel"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon />
      </a>
    </li>
    <li className={s.Item}>
      <a
        href="https://medium.com/@Limex"
        className={s.Link}
        aria-label="Our medium channel"
        target="_blank"
        rel="noreferrer"
      >
        <MediumIcon />
      </a>
    </li>
    <li className={s.Item}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        className={s.Link}
        aria-label="Our gitlab page"
        target="_blank"
        rel="noreferrer"
      >
        <GitlabIcon />
      </a>
    </li>
  </ul>
);
