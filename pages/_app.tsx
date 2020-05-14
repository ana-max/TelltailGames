import React  from 'react';
import {Helmet} from 'react-helmet';
import {BrowserRouter, Route, StaticRouter, Switch} from 'react-router-dom';

import TagPage from './tags';
import ScenePage from './scene';
import AdventuresPage from './adventures';
import Header from '../components/header/header';
import './app.css';

export default function MyApp() {
  const isServer = typeof window === 'undefined';
  return (
    <>
      <Helmet>
        <title>TellTail Games</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Gabriela" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      </Helmet>
      {(isServer) ?
      <StaticRouter>
        <Paths />
      </StaticRouter> :
      <BrowserRouter>
        <Paths />
      </BrowserRouter>}
    </>
  );
}

const Paths = () =>
  <>
    <Header />
    <Switch>
      <Route path='/' exact component={AdventuresPage} />
      <Route path='/tags/:tagName' render={(props) =>
        <TagPage key={props.match.params.tagName} {...props} />} />
      <Route path='/scenes/:id' render={(props) =>
        <ScenePage key={props.match.params.id} {...props} />} />
    </Switch>
  </>;
