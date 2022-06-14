import { useEffect, useRef } from 'react';
import Header from './header/header';
import Main from './main/main';
import { pSBC } from '@resume-creator/shared';


const useCustomStyles = (color: string, nightMode: boolean, ref: React.MutableRefObject<HTMLDivElement>) => {
  useEffect(() => {
    ref.current.style.setProperty('--ambient', color);
    const multiplier = nightMode ? 0.2 : -0.2;
    const ambientAltColor = pSBC(multiplier, color);
    ref.current.style.setProperty('--ambient-alt', ambientAltColor);
  }, [color]);

  useEffect(() => {
    if (nightMode) {
      ref.current.classList.add('night');
    } else {
      ref.current.classList.remove('night');
    }
    const multiplier = nightMode ? 0.2 : -0.2;
    const ambientAltColor = pSBC(multiplier, color);
    ref.current.style.setProperty('--ambient-alt', ambientAltColor);
  }, [nightMode]);
}


/* eslint-disable-next-line */
export interface CanvasProps {
  data: any,
  nightMode: boolean;
  color: string;
}

export function Canvas(props: CanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useCustomStyles(props.color, props.nightMode, containerRef);

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
