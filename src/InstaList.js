import React, { Component } from 'react'
import logo from './logo.svg'
import InstaPost from './InstaPost'

export default class InstaList extends Component {
    render() {
        const { posts } = this.props;
        console.log(posts)
        return (
            <div>
                {
                    posts.map((post) => {
                        <InstaPost posts={post}/>
                    })
                }
            </div>
        )
    }
}
