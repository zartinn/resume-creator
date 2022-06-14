import data from '../../../assets/data.json';
import { useContactInformation } from './use-contact-information';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const getJobTitle = () => data.general.jobtitle && <h2>{data.general.jobtitle}</h2>;
  const getIntroduction = () => data.general.introduction && <p>{data.general.introduction}</p>;
  const { getContactInformation } = useContactInformation(data.general['contact-information']);

  return (
      <header>
        <div className="left">
          <h1>{data.general.name}</h1>
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
