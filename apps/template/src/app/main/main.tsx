import './main.module.scss';
import calendar from '../../assets/icons/calendar.png';
import data from '../../assets/data.json';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <>
      <main>
        <div className="left">
          <div className="expertise">
            <h1>Technical Skills</h1>
            <div className="areas">
              {data['quick-info']['technical-skills'].map((skill, idx) => <div key={idx}>{skill.name}<span className={'bar e' + skill.score}></span></div>)}
            </div>
          </div>
          <div className="soft-skills">
            <h1>Soft Skills</h1>
            <div className="areas">
              {data['quick-info']['soft-skills'].map((skill, idx) => <div key={idx}>{skill.name}<span className={'bar e' + skill.score}></span></div>)}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="experience">
            <h1>Work Experience</h1>
            {data.main['work-experience'].map((exp, idx) =>
              <div key={idx}>
                <div className="work-place">
                  <h4>{exp.title}</h4>
                  <p>{exp.date}<img src={calendar}/></p>
                </div>
                {exp.paragraphs.map((paragraph, idx) => 
                  paragraph.disabled ? <></> : <p key={idx}>{paragraph.content}</p>
                )}
              </div>  
            )}
          </div>
          <div className="achievments">
            <h1>Achievments</h1>
            {data.main.achievments.map((achievment, idx) => 
              <div key={idx} className="list-item">
                <div className="marker"></div>
                {achievment.disabled ? <></> : <p>{achievment.content}</p>}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
