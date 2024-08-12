import Link from 'next/link';
import { IconArrowLeft, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

import styles from './styles.module.css';

const navItemsRight = {
  github: {
    href: 'https://github.com/dsa821/',
    icon: <IconBrandGithub />,
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/dansa/',
    icon: <IconBrandLinkedin />,
  },
};

export function Topnav() {
  return (
    <aside className='pt-4 pb-4 lg:sticky lg:top-0'>
      <nav
        className='flex justify-between relative px-0 lg:px-2 fade scroll-pr-6'
        id='nav'
      >
        <div className='flex flex-row gap-1'>
          <Link
            href='/'
            className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1'
          >
            <IconArrowLeft className={`${styles.accent} mr-4`} /> Back
          </Link>
        </div>

        <div className='flex flex-row gap-1'>
          {Object.entries(navItemsRight).map(([key, { href, icon }]) => {
            return (
              <Link
                key={key}
                href={href}
                className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1'
              >
                {icon}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
