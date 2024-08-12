import { IconDownload, IconMail } from '@tabler/icons-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='p-8'>
      <div className='grid grid-cols-3'>
        <span className='flex gap-4'>
          <IconMail />
          <Link href='mailto:hi@danielsa.dev'>hi@danielsa.dev</Link>
        </span>

        <span className='flex gap-4'>
          <IconDownload />
          <Link
            href='/docs/Daniel Sa - Senior Staff Software Engineer - Resume.pdf'
            target='_blank'
          >
            Resume
          </Link>
        </span>
      </div>
    </footer>
  );
};
