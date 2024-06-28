import { WorkHistory } from 'app/components/WorkHistory';

export const metadata = {
  title: 'Home',
  description: 'Personal website for Daniel Sa',
};

export default function Page() {
  return (
    <section className='prose dark:prose-invert'>
      <h1>dsa.dev</h1>
      <p>
        Hi, I'm Dan! I'm a full stack software engineer with 15+ years of
        experience building web applications to handle complex data,
        particularly in genomics. I have extensive experience with{' '}
        <strong>Angular</strong> web applications with <strong>C#</strong>{' '}
        back-ends and am familiar with other front-end frameworks including{' '}
        <strong>React</strong> and <strong>NextJS</strong>.
      </p>

      <h2>Places I've Worked At</h2>
      <WorkHistory />
    </section>
  );
}
