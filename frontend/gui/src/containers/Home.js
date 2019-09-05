import React from 'react';

import { Card } from 'antd';

class Home extends React.Component {
    state = {
        title: "简要介绍",
        content: 
            <div>
                最近更新了个人博客，这次更新主要做了下面几点改进：<br />
                &nbsp;&nbsp;&nbsp;&nbsp;1. 使用了前端框架React+ant.Design。<br />
                &nbsp;&nbsp;&nbsp;&nbsp;2. 后端仍使用django框架，但只通过djangorestframework提供数据库的接口。<br />
                &nbsp;&nbsp;&nbsp;&nbsp;3. 优化了网页界面。<br />
                &nbsp;&nbsp;&nbsp;&nbsp;4. 使用MySQL做后端数据库，不再使用django自带的sqlite。<br />
                这一版还会不断更新上传博客的界面，提高自己的体验。<br />
            </div>
        }   

    render() {
        return (
            <div>
                <Card title={this.state.title}>
                    <p>{this.state.content}</p>
                </Card>
            </div>
            
        )
    };
}

export default Home;