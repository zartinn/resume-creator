import Header from './header/header';
import Main from './main/main';

/* eslint-disable-next-line */
export interface CanvasProps {
  data?: any
}

export function Canvas(props: CanvasProps) {
  return (
    <div className='canvasContainer'>
      <div className={'resumeCanvas'}>
        <div className="wrapper">
          <Header data={props.data}></Header>
          <Main data={props.data}></Main>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
