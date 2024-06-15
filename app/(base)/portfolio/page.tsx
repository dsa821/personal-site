import Link from 'next/link';

export const metadata = {
  title: 'Portfolio',
  description: "Stuff I've worked on",
};

export default function Page() {
  return (
    <section>
      <div>
        <Link href='/portfolio/forenseq'>ForenSeq</Link>
      </div>
    </section>
  );
}
