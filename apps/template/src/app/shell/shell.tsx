import { usePdf } from '@resume-creator/shared';
import styles from './shell.module.scss';
import Configuration from './configuration/configuration';
import Canvas from '../canvas/canvas';
import data from '../../assets/data.json';


/* eslint-disable-next-line */
export interface ShellProps {}

export function Shell(props: ShellProps) {

  let { savePdf } = usePdf();


  return (
    <div className={styles['shell']}>
      <button className='saveButton' onClick={savePdf}>send</button>
      <Configuration></Configuration>
      <Canvas data={data}></Canvas>
    </div>
  );
}

export default Shell;
