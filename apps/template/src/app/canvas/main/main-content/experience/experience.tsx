import Icon from '../../../../components/icon/icon';
import './experience.module.scss';

/* eslint-disable-next-line */
export interface ExperienceProps {
  experience: any[]
}

export function Experience(props: ExperienceProps) {
  return (
    <>
      { props.experience && props.experience.length > 0 &&
        <div className="experience">
          <h1>Work Experience</h1>
          {props.experience.map((exp, idx) =>
            <div id={`experience_${idx}`} key={`experience_${idx}`} className="work-place-wrapper">
              <div className="work-place">
                <h4>{exp.title}</h4>
                <p>{exp.date}<Icon fileName='calendar.png'></Icon></p>
              </div>
              {exp.paragraphs.map((paragraph, idx_p) => 
                paragraph.disabled && <p id={`paragraph_${idx_p}`} key={`paragraph_${idx_p}`}>{paragraph.content}</p>
              )}
              {exp.tasks && exp.tasks.map((task, idx_t) => <div id={`task_${idx_t}`} key={`task_${idx_t}`} className="list-item"><div className="marker"></div><p>{task}</p></div>)}
            </div>  
          )}
        </div>
      }
    </>
  );
}

export default Experience;
