export const metadata = {
  title: 'Portfolio',
  description: "Some of the things I've worked on",
};

import { Portfolio } from "app/components/Portfolio";

export default function Page() {
  return (
    <section className='prose dark:prose-invert max-w-none'>
      <Portfolio />
    </section>
  );
}
