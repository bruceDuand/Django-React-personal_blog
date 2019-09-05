import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

import ReactMarkdown from 'react-markdown'

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://45.78.10.61:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                });

                console.log(res.data);
            })
    }

    // handleDelete = (event) => {
    //     const articleID = this.props.match.params.articleID;
    //     axios.delete (`http://127.0.0.1:8000/api/${articleID}`);
    //     this.props.history.push('/');
    //     this.forceUpdate();

    // }

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{<ReactMarkdown source={this.state.article.content}></ReactMarkdown>}</p>
                </Card>
            </div>
            
        )
    }
}

export default ArticleDetail;