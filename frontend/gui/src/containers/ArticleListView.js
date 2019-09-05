import React from 'react';
import axios from 'axios';

import Articles from '../components/Article';

class ArticleList extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http://45.78.10.61:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });

                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <Articles data={this.state.articles}/>
            </div>
        )
    }
}

export default ArticleList;