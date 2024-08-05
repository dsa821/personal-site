import { WorkHistory } from 'app/components/WorkHistory';
import styles from './page.module.css';
import Link from 'next/link';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

export const metadata = {
  title: 'Home',
  description: 'Personal website for Daniel Sa',
};

const navLinks = [
  {
    displayName: 'About',
    href: '#about',
  },
  {
    displayName: 'Experience',
    href: '#experience',
  },
  {
    displayName: 'Projects',
    href: '#projects',
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
];

export default function Page() {
  return (
    <div>
      <section className={styles.root}>
        <section className={styles.sidebar}>
          <h1>dsa<span className={styles.accent}>.</span>dev</h1>
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
        </section>

        <section className={styles.content}>
          <h2 id='about' className={styles.subheading}>
            About
          </h2>
          <p>
            Hi, I'm Dan! I'm a <strong>full stack software engineer</strong> with 15+ years of
            experience building web applications to handle complex data,
            particularly in genomics. I have extensive experience with{' '}
            <strong>Angular</strong> web applications with <strong>C#</strong>{' '}
            back-ends and am familiar with other front-end frameworks including{' '}
            <strong>React</strong> and <strong>NextJS</strong>.
          </p>

          <h2 id='experience' className={styles.subheading}>
            Experience
          </h2>
          <WorkHistory />

          <h2 id='projects' className={styles.subheading}>
            Projects
          </h2>
        </section>
      </section>
    </div>
  );
}
