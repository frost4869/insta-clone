import React, { Component } from 'react'
import logo from './logo.svg'
import InstaPost from './InstaPost'

export default class InstaList extends Component {
    render() {
        const { posts } = this.props;
        posts.map(q => console.log(q.id))
        return (
            posts.map(q => 
                <InstaPost post={q}/>
            )
        )
    }
}
