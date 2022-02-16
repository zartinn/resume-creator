import './languages.module.scss';

/* eslint-disable-next-line */
export interface LanguagesProps {
  languages: any[]
}

const arr = [0,0,0,0,0];

export function Languages(props: LanguagesProps) {
  return (
    <>
      {!props.languages || props.languages.length === 0 ? <></> :
      
      <div className="quick-info languages">
        <h1>Sprachen</h1>
        {props.languages.map((lang, idx) =>
          <div className="language" key={idx}><p>{lang.name}</p>{arr.map((circle, index) => <div key={index} className={'circle ' + (index < lang.knowledge ? 'filled' : '')}></div>)}</div>
        )}
      </div>
      }
    </>
  );
}

export default Languages;
