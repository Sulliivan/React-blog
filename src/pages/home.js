import React from 'react'
import { PostMasonry, MasonryPost } from '../components/common'
import trending from '../assets/mocks/trending'
import featured from '../assetsmocks/featured'



const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 4'
    }
}

const featuredConfig = {
    o: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },
    1: {
        height: '300px'
    },
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px'
    }

}


const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index] 
    })
}


mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastfeatured = featured.pop()

export default function Home () {
    return (
    <section className="container home">
        <div className="row">
            <h1>Featured Post</h1>
                <section className="featured-post-container">
                    <PostMasonry posts={featured} column={2} tagsOnTop={true}/> 
                    <PostMasonry posts={lastfeatured} tagsOnTop={true}/>
                </section>

            <h1>Trending Posts</h1>
            <PostMasonry posts={trending} column={3}/>
        </div>
    </section>
    )
}