import React, { Component } from 'react'
import InstaList from './InstaList'
import fetchJsonp from 'fetch-jsonp'

export default class InstaContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this
            .loadData
            .bind(this)();
    }

    loadData() {
        this.setState({ loading: true })
        let api_url = `https://api.instagram.com/v1/users/self/media/recent?access_token=${this.props.token}`;

        console.log(api_url);

        fetchJsonp(api_url).then((data) => {
            return data.json();
        }).then((json) => {
            this.setState({ posts: json, loading: false })
        })
    }

    render() {
        const posts = this.state.posts && this.state.posts.data;
        if (posts) {
            return (<InstaList posts={posts} loading={this.state.loading} />);
        } else {
            return (
                <h3>Wait...</h3>
            )
        }

    }
}