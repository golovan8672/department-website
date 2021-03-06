import React from 'react';
import style from './App.module.scss';
import './normalize.scss'
import Header from './component/Header/Header';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NewsContainer from './component/News/NewsContainer';
import SurveyContainer from './component/Survey/SurveyContainer';
import ForumContainer from './component/Forum/ForumContainer';
import Information from './component/Imformation/Information';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Header />
        <div className={style['container']}>
          <Switch>
            <Route exact path='/' render={() => <NewsContainer />} />
            <Route path='/survey' render={() => <SurveyContainer />} />
            <Route exact path='/forum' render={() => <ForumContainer />} />
            <Route path='/info' render={() => <Information />} />
          </Switch>

        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
