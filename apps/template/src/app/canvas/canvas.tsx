import { useEffect, useRef } from 'react';
import Header from './header/header';
import Main from './main/main';


const useNightMode = (nightMode: boolean, ref: React.MutableRefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (nightMode) {
      ref.current.classList.add('night');
    } else {
      ref.current.classList.remove('night');
    }
  }, [nightMode]);
}


/* eslint-disable-next-line */
export interface CanvasProps {
  data?: any,
  nightMode?: boolean;
}

export function Canvas(props: CanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useNightMode(props.nightMode, containerRef);

  return (
    <div ref={containerRef} className='canvasContainer'>
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
