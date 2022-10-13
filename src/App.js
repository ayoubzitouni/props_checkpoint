import Profile from'./Profile/profile'
import Image from './Profile/Image'
import './App.css'
function App() {




  const handleName=(name)=>{
    alert(`My name is ${name}`)
  }
  return (
    <div className="App">
      <Image>https://cdn.discordapp.com/attachments/801396567382163499/1029404938301865984/69065261_1214144545453797_5776513958357762048_n.jpg</Image>
      <Profile name="Ayoub Zitouni" bio="Hi i'am Ayoub" yt="https://www.youtube.com/channel/UC_1cJzrwWeo7buJt2f2ysVQ" reddit="https://www.reddit.com/user/MrMAZE1" github="https://github.com/ayoubzitouni" profession="Student" handleName={handleName}/>
    </div>
  );
}

export default App;
