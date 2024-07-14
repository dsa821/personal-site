import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFolder,
  IconHome,
} from '@tabler/icons-react';

const navItemsLeft = {
  '/': {
    name: 'home',
    icon: <IconHome />,
  },
  '/portfolio': {
    name: 'portfolio',
    icon: <IconFolder />,
  },
  // '/blog': {
  //   name: 'blog',
  // },
};

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

export function Navbar() {
  return (
    <aside className='pt-4 pb-4 lg:sticky lg:top-0'>
      <nav
        className='flex justify-between relative px-0 lg:px-2 fade scroll-pr-6'
        id='nav'
      >
        <div className='flex flex-row gap-1'>
          {Object.entries(navItemsLeft).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1'
              >
                {name}
              </Link>
            );
          })}
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
