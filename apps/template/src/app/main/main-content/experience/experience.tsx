import './experience.module.scss';
import calendar from '../../../../assets/icons/calendar.png';

/* eslint-disable-next-line */
export interface ExperienceProps {
  experience: any[]
}

export function Experience(props: ExperienceProps) {
  return (
    <>
      { !props.experience || props.experience.length === 0 ? <></> : 
        <div className="experience">
          <h1>Work Experience</h1>
          {props.experience.map((exp, idx) =>
            <div key={idx} className="work-place-wrapper">
              <div className="work-place">
                <h4>{exp.title}</h4>
                <p>{exp.date}<img src={calendar}/></p>
              </div>
              {exp.paragraphs.map((paragraph, idx) => 
                paragraph.disabled ? <></> : <p key={idx}>{paragraph.content}</p>
              )}
              {exp.tasks ? exp.tasks.map((task, idx) => <div key={idx} className="list-item"><div className="marker"></div><p>{task}</p></div>) : <></>}
            </div>  
          )}
        </div>
      }
    </>
  );
}

export default Experience;
