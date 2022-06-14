import './configuration.module.scss';

/* eslint-disable-next-line */
export interface ConfigurationProps {
  setNightMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Configuration(props: ConfigurationProps) {
  const onDaymodeChange = () => {
    props.setNightMode(nightMode => (!nightMode));
  }

  return (
    <div>
      <label>Night mode</label>
      <input onChange={onDaymodeChange} type="checkbox"/>
    </div>
  );
}

export default Configuration;
