import Link from 'next/link';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

import styles from './styles.module.css';

const navLinks = [
  {
    displayName: 'About',
    href: '/#about',
  },
  {
    displayName: 'Experience',
    href: '/#experience',
  },
  {
    displayName: 'Projects',
    href: '/#projects',
  },
  {
    displayName: 'Contact',
    href: '/#contact',
  },
];

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

export function Sidenav() {
  return (
    <aside className={styles.sidebar}>
      <h1 className={styles.heading}>
        dsa<span className={styles.accent}>.</span>dev
      </h1>
      <nav className={styles.nav}>
        <div>
          {navLinks.map((x) => {
            return (
              <Link
                key={x.href}
                href={x.href}
                className={styles['nav-menu-item']}
              >
                {x.displayName}
              </Link>
            );
          })}
        </div>

        <div className={styles.icons}>
          {navIcons.map((x) => {
            return (
              <Link
                key={x.key}
                href={x.href}
                className={styles['nav-menu-icon']}
              >
                {x.icon}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
