import React from 'react'
import './profile.css'

const profile = ({data}) => {

    return (
        <div className='parent'>
            <div className='presentation'>
                <div className='name'>
                    <h1>FULL NAME :</h1>
                    <p>{data.name}</p>
                </div>
                <div className='bio'>
                    <h1>BIO :</h1>
                    <p>{data.bio}</p>
                </div>
                <div className='profession'>
                    <h1>Profession :</h1>
                    <p>{data.profession}</p>
                </div>
                <div className='links'>
                    <h1>LINKS :</h1>
                    <div className='socials'>
                    <a href={data.yt} target="_blanck"><img src={data.ytlogo} alt=""/></a>
                    <a href={data.github} target="_blanck"><img src={data.githublogo} alt=""/></a>
                    <a href={data.reddit} target="_blanck"><img src={data.redditlogo} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
profile.defaultdata={
    name:"no name"
};
export default profile