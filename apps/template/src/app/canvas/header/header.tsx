import { useEffect } from 'react';
import { useContactInformation } from './use-contact-information';

/* eslint-disable-next-line */
export interface HeaderProps {
  data?: any;
}

export function Header(props: HeaderProps) {
  const getJobTitle = () => props.data.general.jobtitle && <h2>{props.data.general.jobtitle}</h2>;
  const getIntroduction = () => props.data.general.introduction && <p>{props.data.general.introduction}</p>;
  const { getContactInformation } = useContactInformation(props.data.general['contact-information']);

  return (
      <header>
        <div className="left">
          <h1>{props.data.general.name}</h1>
          {getJobTitle()}
          {getIntroduction()}
        </div>
        {/* <div className="image">
          <img src="assets/profil-quadrat.png" />
        </div> */}
        <div className="right">
          {getContactInformation}
        </div>
      </header>
  );
}

export default Header;
