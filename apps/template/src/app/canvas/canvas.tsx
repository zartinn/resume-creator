import styles from './canvas.module.scss';
import Header from './header/header';
import Main from './main/main';

/* eslint-disable-next-line */
export interface CanvasProps {}

export function Canvas(props: CanvasProps) {
  return (
    <>
      <div className={styles['canvas'] + ' resumeCanvas'}>
        <div className="wrapper">
          <Header></Header>
          <Main></Main>
        </div>
      </div>
    </>
  );
}

export default Canvas;
