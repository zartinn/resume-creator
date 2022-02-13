import './skills.module.scss';

/* eslint-disable-next-line */
export interface SkillsProps {
  skills: any[],
  title: string
}

export function Skills(props: SkillsProps) {
  return (
    <>
      { !props.skills || props.skills.length === 0  ? <></> :

      <div className="quick-info expertise">
        <h1>{props.title}</h1>
        <div className="areas">
          {props.skills.map((skill, idx) => <div key={idx}><p>{skill.name}</p><span className={'bar e' + skill.score}></span></div>)}
        </div>
      </div> 
      }
    </>
  );
}

export default Skills;
