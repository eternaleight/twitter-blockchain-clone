import { BsStars } from 'react-icons/bs'
import { FaLessThanEqual } from 'react-icons/fa'
import TweetBox from './Tweetbox'
import Post from '../Post'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] `,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweet = [
  {
    displayName: 'eternaleight@',
    userName: '0x7165662174c8b2A4e97d6321bb8caeBb3179940C',
    avater: 'https://avatars.githubusercontent.com/u/96198088?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2022-02-21T12:00:00.000Z',
  },
  {
    displayName: 'eternaleight@',
    userName: '0x7165662174c8b2A4e97d6321bb8caeBb3179940C',
    avater: 'https://avatars.githubusercontent.com/u/96198088?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2021-12-01T12:00:00.000Z',
  },
  {
    displayName: 'eternaleight@',
    userName: '0x7165662174c8b2A4e97d6321bb8caeBb3179940C',
    avater: 'https://avatars.githubusercontent.com/u/96198088?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2021-11-01T12:00:00.000Z',
  },
  {
    displayName: 'eternaleight@',
    userName: '0x7165662174c8b2A4e97d6321bb8caeBb3179940C',
    avater: 'https://avatars.githubusercontent.com/u/96198088?v=4',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-09-01T12:00:00.000Z',
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
      {tweet.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName.slice}
          userName={`${tweet.userName.slice(0, 4)}...${tweet.userName-4}`}
          avatar={tweet.avater}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed