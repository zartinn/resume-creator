import './education.module.scss';
import calendar from '../../../../../assets/icons/calendar.png';

/* eslint-disable-next-line */
export interface EducationProps {
  education: any[]
}

export function Education(props: EducationProps) {
  return (
    <>
      { !props.education || props.education.length === 0 ? <></> :

        <div className="quick-info education">
          <h1>Bildung</h1>
          {props.education.map((edu, idx) =>
            <div key={idx}>
              <h4>{edu.degree}</h4>
              <p>{edu.school}</p>
              <p className="date"><img src={calendar}/>{edu.date}</p>
            </div>
          )}
        </div>
      }
    </>
  );
}

export default Education;
