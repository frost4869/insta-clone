import React, { Component } from 'react'

export default class InstaPost extends Component {
    render() {
        const {post} = this.props;
        return (
            <div>
                <image src={post.images.standard_resolution.url}/>
                <p>{post.caption.text}</p>
                <p>{post.likes.count}</p>
            </div>
        )
    }
}
