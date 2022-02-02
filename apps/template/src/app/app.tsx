// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.module.scss';
import Header from './header/header';
import Main from './main/main';
import download from 'downloadjs';

export function App() {
  function savePDF() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: document.documentElement.outerHTML })
    };
    fetch('http://localhost:3333/generate-pdf', requestOptions)
      .then(res => res.blob())
      .then(blob => download(blob, 'resume.pdf'));
  }

  return (
    <>
      <button onClick={() => savePDF()}>send</button>
      <div className="resumeCanvas">
        <div className="wrapper">
          <Header></Header>
          <Main></Main>
        </div>
      </div>
    </>
  );
}

export default App;
