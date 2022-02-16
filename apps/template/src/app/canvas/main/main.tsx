import './main.module.scss';
import dataJson from '../../../assets/data.json';
import QuickInfos from './quick-infos/quick-infos';
import MainContent from './main-content/main-content';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {

  return (
    <>
      <main>
        <div className="left">
          <QuickInfos quickInfos={dataJson['quick-info']}></QuickInfos>
        </div>
        <div className="right">
          <MainContent content={dataJson['main']}></MainContent>
        </div>
      </main>
    </>
  );
}

export default Main;
