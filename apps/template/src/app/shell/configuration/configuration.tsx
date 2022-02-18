import { useEffect } from 'react';
import './configuration.module.scss';

/* eslint-disable-next-line */
export interface ConfigurationProps {}

export function Configuration(props: ConfigurationProps) {
  let html: HTMLElement;
  let templateRoot: HTMLElement;
  const onDaymodeChange = () => {
    if (!templateRoot) {
      const iframe = document.querySelector('iframe');
      templateRoot = iframe.contentDocument.querySelector('html');
    }
    templateRoot.classList.toggle('night');
  }

  useEffect(() => {
    html = document.querySelector('html');
  }, []);

  return (
    <div>
      <label>Night mode</label>
      <input onChange={onDaymodeChange} type="checkbox"/>
    </div>
  );
}

export default Configuration;
