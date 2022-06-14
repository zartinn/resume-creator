import './configuration.module.scss';

/* eslint-disable-next-line */
export interface ConfigurationProps {}

export function Configuration(props: ConfigurationProps) {
  let templateRoot: HTMLElement;
  const onDaymodeChange = () => {
    if (!templateRoot) {
      templateRoot = document.querySelector('.canvasContainer');
    }
    templateRoot.classList.toggle('night');
  }

  return (
    <div>
      <label>Night mode</label>
      <input onChange={onDaymodeChange} type="checkbox"/>
    </div>
  );
}

export default Configuration;
