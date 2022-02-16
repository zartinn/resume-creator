import { useEffect } from 'react';
import download from 'downloadjs';
import './shell.module.scss';
import { usePdf } from './hooks/use-pdf';
import styles from './shell.module.scss';

/* eslint-disable-next-line */
export interface ShellProps {}

export function Shell(props: ShellProps) {

  let { savePdf } = usePdf();


  return (
    <div className={styles['shell']}>
      <button className='saveButton' onClick={() => savePdf()}>send</button>
      <iframe src="./canvas"></iframe>
    </div>
  );
}

export default Shell;
