import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import Home from './containers/Home';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/post' component={ArticleList} />
        <Route exact path='/post/:articleID' component={ArticleDetail} />
    </div>
)

export default BaseRouter;