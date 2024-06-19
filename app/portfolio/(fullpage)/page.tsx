import Image from 'next/image';
import Link from 'next/link';

import { Intro, portfolioData } from './data';
import styles from './page.module.css';

export const metadata = {
  title: 'Portfolio',
  description: "Stuff I've worked on",
};

export default function Page() {
  return (
    <section className='prose dark:prose-invert max-w-none'>
      <Intro />
      
      {portfolioData.map((data, i) => {
        return (
          <div key={i} className={data.color ? styles[data.color] : ''}>
            <div className={styles.section}>
              <h2>{data.title}</h2>

              {data.img && (
                <div className='mx-auto'>
                  <Image
                    src={data.img.src}
                    alt={data.img.alt}
                    width={data.img.width ?? 800}
                    height={data.img.height ?? 600}
                  />
                </div>
              )}

              <div>{data.content}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
