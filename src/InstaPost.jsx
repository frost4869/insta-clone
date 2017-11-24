import React, { Component } from 'react'

export default class InstaPost extends Component {
    render() {
        const {post} = this.props;
        return (
            <div>
                <img src={post.images.standard_resolution.url}/>
                <p>{post.caption ? post.caption.text : '#nocaption'}</p>
                <p>{post.likes.count}</p>
            </div>
        )
    }
}
