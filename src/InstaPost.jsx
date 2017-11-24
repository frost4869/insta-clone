import React, { Component } from 'react'

export default class InstaPost extends Component {
    render() {
        const { post } = this.props;
        const media_content = post.type == 'video' ?
            <video width="500" autoPlay>
                <source src={post.videos.low_bandwidth.url} />
            </video>
            :
            <img src={post.images.standard_resolution.url} />

        return (
            <div>
                {media_content}
                <p>{post.caption ? post.caption.text : '#nocaption'}</p>
                <p>{post.likes.count}</p>
            </div>
        )
    }
}
