import Profile from'./Profile/profile'
import Image from './Profile/Image'
import Alert from './Profile/handleName';
import './App.css'
function App() {
  const nm="Ayoub Zitouni"
  return (
    <div className="App">
      <Alert name={nm}/>
      <Image>https://cdn.discordapp.com/attachments/801396567382163499/1029404938301865984/69065261_1214144545453797_5776513958357762048_n.jpg</Image>
      <Profile name={nm} bio="Hi i'am Ayoub" yt="https://www.youtube.com/channel/UC_1cJzrwWeo7buJt2f2ysVQ" reddit="https://www.reddit.com/user/MrMAZE1" github="https://github.com/ayoubzitouni" profession="Student"/>
    </div>
  );
}

export default App;
