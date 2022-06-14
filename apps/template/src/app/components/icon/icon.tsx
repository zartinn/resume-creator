import './icon.module.scss';

/* eslint-disable-next-line */
export interface IconProps {
  fileName: string;
}

export function Icon(props: IconProps) {
  const assetPath = document.baseURI + 'assets/icons';

  return (
    <span className="img" style={{ WebkitMaskImage: `url(${assetPath}/${props.fileName})`, display: 'inline-block' }}></span>
  );
}

export default Icon;
