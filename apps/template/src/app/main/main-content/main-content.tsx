import './main-content.module.scss';
import Achievments from './achievments/achievments';
import Experience from './experience/experience';

interface MainContent {
  achievments: any[],
  workExperience: any[]
}

/* eslint-disable-next-line */
export interface MainContentProps {
  content: MainContent
}

export function MainContent(props: MainContentProps) {


  return (
    <>
      <Experience experience={props.content.workExperience}></Experience>
      <Achievments achievments={props.content.achievments}></Achievments>
    </>
  );
}

export default MainContent;
