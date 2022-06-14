import dataJson from '../../../assets/data.json';
import QuickInfos from './quick-infos/quick-infos';
import MainContent from './main-content/main-content';

/* eslint-disable-next-line */
export interface MainProps {
  data?: any;
}

export function Main(props: MainProps) {

  return (
    <>
      <main>
        <div className="left">
          <QuickInfos quickInfos={props.data['quick-info']}></QuickInfos>
        </div>
        <div className="right">
          <MainContent content={props.data['main']}></MainContent>
        </div>
      </main>
    </>
  );
}

export default Main;
