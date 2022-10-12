import React from 'react'
import './profile.css'





const profile = (props) => {
    const styling={width:"5vw",backgroundColor:"blue",height:"6vh",display:"flex",alignItems:"center",justifyContent:"center",margin:"1px",borderRadius:"5%"}
    return (
            <div className='parent'>
            <div className='presentation'>
                <div className='name'>
                    <h1>FULL NAME :</h1>
                    <p>{props.name}</p>
                </div>
                <div className='bio'>
                    <h1>BIO :</h1>
                    <p>{props.bio}</p>
                </div>
                <div className='profession'>
                    <h1>Profession :</h1>
                    <p>{props.profession}</p>
                </div>
                <div className='links'>
                    <h1>LINKS :</h1>
                    <div className='socials'>
                    <a href={props.yt} target="_blanck" style={styling}><img src={props.ytlogo} alt="" style={{width:"2vw"}}/></a>
                    <a href={props.github} target="_blanck" style={styling}><img src={props.githublogo} alt=""style={{width:"2vw"}}/></a>
                    <a href={props.reddit} target="_blanck" style={styling}><img src={props.redditlogo} alt=""style={{width:"2vw"}}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
profile.defaultProps={
    name:"no name",
    profession:"No profession",
    bio:"I'm New here!",
    github:"#",
    yt:"#",
    reddit:"#",
    githublogo:"https://cdn-icons-png.flaticon.com/512/25/25231.png",
    ytlogo:"https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png",
    redditlogo:"https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png",

};
export default profile