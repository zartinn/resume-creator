import './header.module.scss';
import phone from '../../../assets/icons/phone.png';
import mail from '../../../assets/icons/mail.png';
import location from '../../../assets/icons/location.png';
import linkedin from '../../../assets/icons/linkedin.svg';
import github from '../../../assets/icons/github.png';
import data from '../../../assets/data.json';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const getJobTitle = () => data.general.jobtitle && <h2>{data.general.jobtitle}</h2>;
  const getIntroduction = () => data.general.introduction && <p>{data.general.introduction}</p>;
  const getLinkedIn = () => data.general.linkedin && <a href={`https://${data.general.linkedin}`}>{data.general.linkedin}<img src={linkedin} /></a>;
  const getGithub = () => data.general.github && <a href={`https://${data.general.github}`}>{data.general.github}<img src={github} /></a>;

  return (
    <>
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
          <a href={`mailto:${data.general.email}`}>
            {data.general.email}
            <img src={mail} />
            <div className="img email"></div>
          </a>
          <p>
            {data.general.phone}
            <img src={phone} />
          </p>
          <p>
            {data.general.location}
            <img src={location} />
          </p>
          {getLinkedIn()}
          {getGithub()}
        </div>
      </header>
    </>
  );
}

export default Header;
