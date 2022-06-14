import { usePdf } from '@resume-creator/shared';
import styles from './shell.module.scss';
import Configuration from './configuration/configuration';

/* eslint-disable-next-line */
export interface ShellProps {}

export function Shell(props: ShellProps) {

  let { savePdf } = usePdf();


  return (
    <div className={styles['shell']}>
      <button className='saveButton' onClick={savePdf}>send</button>
      <Configuration></Configuration>
      <iframe src="./canvas" scrolling="no"></iframe>
    </div>
  );
}

export default Shell;
