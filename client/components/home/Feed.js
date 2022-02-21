import { BsStars } from 'react-icons/bs'
import { FaLessThanEqual } from 'react-icons/fa'
import TweetBox from './Tweetbox'
import Post from '../Post'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] `,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: 'Qazi',
    userName: '0x7165662174c8b2A4e97d6321bb8caeBb3179940C',
    avater: 'https://avatars.githubusercontent.com/u/96198088?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.0002',
  },
  {
    displayName: 'Qazi',
    userName: '0x7165662174c8b2A4e97d6321bb8caeBb3179940C',
    avater: 'https://avatars.githubusercontent.com/u/96198088?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.0002',
  },
  {
    displayName: 'Qazi',
    userName: '0x7165662174c8b2A4e97d6321bb8caeBb3179940C',
    avater: 'https://avatars.githubusercontent.com/u/96198088?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.0002',
  },
  {
    displayName: 'Qazi',
    userName: '0x7165662174c8b2A4e97d6321bb8caeBb3179940C',
    avater: 'https://avatars.githubusercontent.com/u/96198088?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.0002',
  },
]

function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweets, index) => (
        <Post
          key={index}
          displayName={tweets.displayName}
          userName={tweets.userName}
          avater={tweets.avater}
          text={tweets.text}
          isProfileImageNft={tweets.isProfileImageNft}
          timestamp={tweets.avater}
        />
      ))}
    </div>
  )
}

export default Feed