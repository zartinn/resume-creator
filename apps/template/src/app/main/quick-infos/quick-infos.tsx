import './quick-infos.module.scss';
import Languages from './languages/languages';
import Education from './education/education';
import Interests from './interests/interests';
import Skills from './skills/skills';

interface QuickInfo {
  languages?: any[],
  education?: any[],
  interests?: any[],
  technicalSkills?: any[],
  softSkills?: any[]
}

/* eslint-disable-next-line */
export interface QuickInfosProps {
  quickInfos: QuickInfo;
}

export function QuickInfos(props: QuickInfosProps) {
  return (
    <>
      <Skills skills={props.quickInfos.technicalSkills} title='Technical Skills'></Skills>
      <Skills skills={props.quickInfos.softSkills} title='Soft Skills'></Skills>
      <Education education={props.quickInfos.education}></Education>
      <Languages languages={props.quickInfos.languages}></Languages>
      <Interests interests={props.quickInfos.interests}></Interests>
    </>
  );
}

export default QuickInfos;
