// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.module.scss';
import Header from './header/header';
import Main from './main/main';

export function App() {
  return (
    <>
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
