import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <h2>ForenSeq Universal Analysis Software</h2>

      <div className='flex flex-col gap-4'>
        <Image
          src='/images/forenseq/v1/locus-overview.png'
          alt='ForenSeq v1 Locus Overview'
          width={800}
          height={600}
        />

        <Image
          src='/images/forenseq/v2/locus-overview.png'
          alt='ForenSeq v1 Locus Overview'
          width={800}
          height={600}
        />
      </div>
    </section>
  );
}
