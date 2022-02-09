import { FC } from 'react';
import s from './style.module.css';
import { TelegramIcon, TwitterIcon } from '../../lib/icons';

export const SocialList: FC = () => (
  <ul className={s.List}>
    <li className={s.Item}>
      <a
        href="https://t.me/limi_dex"
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
        href="https://twitter.com/LimiDEX_Trade"
        className={s.Link}
        aria-label="Our twitter channel"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon />
      </a>
    </li>
  </ul>
);
