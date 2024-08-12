import React from 'react';

import styles from './styles.module.css';

type Props = {
  tags: string[];
};

export const TagList: React.FC<Props> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => {
        return (
          <div key={tag} className={styles.tag}>
            {tag}
          </div>
        );
      })}
    </div>
  );
};
