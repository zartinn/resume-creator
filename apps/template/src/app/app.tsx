// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.module.scss';
import Header from './header/header';
import Main from './main/main';
import download from 'downloadjs';
import { useEffect } from 'react';

export function App() {
  let template: HTMLElement;
  let head: HTMLHeadElement;

  useEffect(() => {
    template = document.querySelector('.resumeCanvas');
    head = document.querySelector('head');
  }, []);

  function savePDF() {
    const completeHTML = `<html>${head.outerHTML}<body>${template.outerHTML}</body></html>`;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: completeHTML })
    };
    fetch('http://localhost:3333/generate-pdf', requestOptions)
      .then(res => res.blob())
      .then(blob => {
        download(blob, 'resume.pdf');
      });
  }

  return (
    <>
      <button className='saveButton' onClick={() => savePDF()}>send</button>
      <div className={'resumeCanvas'}>
        <div className="wrapper">
          <Header></Header>
          <Main></Main>
        </div>
      </div>
    </>
  );
}

export default App;
