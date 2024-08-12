import Link from 'next/link';
import {
  IconArrowLeft,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react';

import styles from './styles.module.css';

const navIcons = [
  {
    key: 'Github',
    href: 'https://github.com/dsa821/',
    icon: <IconBrandGithub />,
  },
  {
    key: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dansa/',
    icon: <IconBrandLinkedin />,
  },
  {
    key: 'Email',
    href: 'mailto:hi@danielsa.dev',
    icon: <IconMail />,
  },
];

export function Topnav() {
  return (
    <aside className='pt-4 pb-4 lg:sticky lg:top-0'>
      <nav
        className='flex justify-between relative px-0 lg:px-2 fade scroll-pr-6'
        id='nav'
      >
        <div className='flex flex-row'>
          <Link href='/' className={styles.hover}>
            <IconArrowLeft className={`${styles.accent} mr-4`} /> Back
          </Link>
        </div>

        <div className='flex flex-row'>
          {navIcons.map((x) => {
            return (
              <Link key={x.key} href={x.href} className={styles.hover}>
                {x.icon}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
