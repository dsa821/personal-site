'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { workHistory } from 'data/work';
import Image from 'next/image';
import Link from 'next/link';

export const WorkHistory: React.FC = () => {
  const parentMotion = {
    visible: {
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.2 },
    },
    hidden: { opacity: 0, transition: { when: 'afterChildren' } },
  };
  const childMotion = {
    visible: { opacity: 1, rotateX: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, rotateX: 90 },
  };
  return (
    <>
      <motion.div
        className='grid grid-cols-none md:grid-cols-3 gap-4'
        variants={parentMotion}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {workHistory.map((x) => (
          <motion.div
            key={x.companyName}
            className='bg-gradient-to-br from-slate-200 to-slate-100 p-4 rounded-xl shadow'
            variants={childMotion}
          >
            <Link
              href={x.companyUrl}
              target='_blank'
              className='flex justify-center'
            >
              <Image
                src={`/images/logos/${x.logoFilename}`}
                alt={x.companyName}
                width={280}
                height={70}
                className='my-0'
              />
            </Link>
            <div className='text-gray-400 text-sm'>{x.dates}</div>
            {/* <div className='font-header font-bold text-2xl'>{x.company}</div> */}

            {/* <div>{x.content}</div> */}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
