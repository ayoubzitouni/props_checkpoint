import Profile from'./Profile/profile'
import Image from './Profile/Image'
import './App.css'
function App() {
  const descr ={
    
    img:"https://cdn.discordapp.com/attachments/801396567382163499/1029404938301865984/69065261_1214144545453797_5776513958357762048_n.jpg",
    bio:`Hi i'am Ayoub`,
    yt:"https://www.youtube.com/channel/UC_1cJzrwWeo7buJt2f2ysVQ",
    ytlogo:"https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png",
    reddit:"https://www.reddit.com/user/MrMAZE1",
    redditlogo:"https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png",
    github:"https://github.com/ayoubzitouni",
    githublogo:"https://cdn-icons-png.flaticon.com/512/25/25231.png",
    profession:"Student",
    }

  return (
    <div className="App">
      <Image>https://cdn.discordapp.com/attachments/801396567382163499/1029404938301865984/69065261_1214144545453797_5776513958357762048_n.jpg</Image>
      <Profile data={descr}/>
    </div>
  );
}

export default App;
