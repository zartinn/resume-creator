import { useState } from 'react';
import { usePdf } from '@resume-creator/shared';
import styles from './shell.module.scss';
import Configuration from './configuration/configuration';
import Canvas from '../canvas/canvas';
import data from '../../assets/data.json';


/* eslint-disable-next-line */
export interface ShellProps {}

export function Shell(props: ShellProps) {
  const [nightMode, setNightMode] = useState(false);
  const [color, setColor] = useState('#006ac5');
  const { savePdf } = usePdf();


  return (
    <div className={styles['shell']}>
      <button className='saveButton' onClick={savePdf}>send</button>
      <Configuration setNightMode={setNightMode} color={color} setColor={setColor}></Configuration>
      <Canvas data={data} nightMode={nightMode} color={color}></Canvas>
    </div>
  );
}

export default Shell;
