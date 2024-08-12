import Link from 'next/link';

import { Contact } from 'app/components/Contact';
import { Projects } from 'app/components/Projects';
import { WorkHistory } from 'app/components/WorkHistory';

import { projectData } from 'data/projects';
import { workHistory } from 'data/work';

import styles from './page.module.css';

export const metadata = {
  title: 'Home',
  description: 'Personal website for Daniel Sa',
};

const interests = [
  {
    label: 'watching',
    items: [{ text: 'Shogun', href: 'https://youtu.be/yAN5uspO_hk?t=5' }],
  },
  {
    label: 'reading',
    items: [
      {
        text: 'Klara and the Sun',
        href: 'https://www.goodreads.com/book/show/54120408-klara-and-the-sun',
      },
    ],
  },
  {
    label: 'listening ',
    items: [{ text: 'Lawrence', href: 'https://youtu.be/C01nBm6vV5c' }],
  },
  {
    label: 'playing',
    items: [
      {
        text: 'Hades 2',
        href: 'https://www.supergiantgames.com/games/hades-ii/',
      },
    ],
  },
];

export default function Page() {
  return (
    <div>
      <section className={styles.root}>
        <section className={styles.content}>
          <h2 id='about' className={styles.subheading}>
            About
          </h2>
          <div className='text-base md:text-xl'>
            <p>
              Hi, I'm Dan! I'm a <strong>full stack software engineer</strong>{' '}
              with 15+ years of experience building web applications to handle
              complex data, particularly in genomics. I have extensive
              experience with <strong>Angular</strong> web applications with{' '}
              <strong>C#</strong> back-ends, and work with other front-end
              frameworks including <strong>React</strong> and{' '}
              <strong>NextJS</strong>.
            </p>

            <p>
              I believe in using the power of technology to make a better world
              for everyone, which is one of the main reasons I enjoy working in
              the field of genomics. Even though my expertise is with the
              software and not the science, I have had the great fortune of
              working with many talented and passionate people across many
              disciplines, who are also motivated to create a better future.
            </p>

            <p>When I'm not coding, I am currently...</p>
            <div className={styles.interests}>
              {interests.map((interest) => {
                return (
                  <div key={interest.label}>
                    <div className={styles.label}>{interest.label}</div>
                    <div className={styles.items}>
                      {interest.items.map((item) => {
                        return (
                          <Link
                            key={item.text}
                            href={item.href}
                            target='_blank'
                          >
                            {item.text}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <h2 id='experience' className={styles.subheading}>
            Experience
          </h2>
          <WorkHistory data={workHistory} />

          <h2 id='projects' className={styles.subheading}>
            Projects
          </h2>
          <Projects data={projectData} />

          <h2 id='contact' className={styles.subheading}>
            Contact
          </h2>
          <Contact />
        </section>
      </section>
    </div>
  );
}
