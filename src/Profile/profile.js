import React from 'react'

const profile = () => {
    const data ={
        name:"Ayoub Zitouni",
        img:"https://cdn.discordapp.com/attachments/801396567382163499/1029404938301865984/69065261_1214144545453797_5776513958357762048_n.jpg",
        bio:`Hi i'am Ayoub`,
        yt:"https://www.youtube.com/channel/UC_1cJzrwWeo7buJt2f2ysVQ",
        ytlogo:"https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png",
        reddit:"https://www.reddit.com/user/MrMAZE1",
        profession:"Student"
        }
    return (
        <div>
            <div className='image'>
                <img src={data.img} alt={data.name}/>
            </div>
            <div className='presentation'>
                <div className='name'>
                    <h1>FULL NAME :</h1>
                    <p>{data.bio}</p>
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
                    <a href={data.yt} target="_blanck"><img src={data.ytlogo}/></a>
                </div>
            </div>
        </div>
    )
}
export default profile