import styles from './configuration.module.scss';
import { SketchPicker } from 'react-color';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface ConfigurationProps {
  setNightMode: React.Dispatch<React.SetStateAction<boolean>>;
  setColor: React.Dispatch<React.SetStateAction<string>>,
  color: string
}

export function Configuration(props: ConfigurationProps) {
  const onDaymodeChange = () => {
    props.setNightMode(nightMode => (!nightMode));
  }

  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (color) => {
    props.setColor(color.hex);
  }
  const togglePicker = () => {
    setShowPicker(prev => !prev);
  }

  return (
    <div className={styles['configuration']}>
      <label>Night mode</label>
      <input onChange={onDaymodeChange} type="checkbox"/>
      <button onClick={togglePicker}>Pick color</button>
      {showPicker && <SketchPicker color={props.color} onChange={handleChange} className={styles['sketchPicker']}/>}
    </div>
  );
}

export default Configuration;
