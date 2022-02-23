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
    text: '川の中ではあなたが触る水が一番最後に過ぎ去ったものであり、また、一番最初に来るものである。現在という時も同じである。猫科の一番小さな動物、つまり猫は、最高傑作である。',
    isProfileImageNft: false,
    timestamp: '2022-02-21T12:00:00.000Z',
  },
  {
    displayName: 'eternaleight@',
    userName: '0x7165662174c8b2A4e97d6321bb8caeBb3179940C',
    avater: 'https://avatars.githubusercontent.com/u/96198088?v=4',
    text: '手段の完璧さと、目的の混乱。この2つが私達の主な問題に見える,学べば学ぶほど、自分がどれだけ無知であるか思い知らされる。自分の無知に気づけば気づくほど、より一層学びたくなる。一見して馬鹿げていないアイデアは、見込みがない。同じことを繰り返しながら、違う結果を望むこと、それを狂気という',
    isProfileImageNft: false,
    timestamp: '2021-12-01T12:00:00.000Z',
  },
  {
    displayName: 'eternaleight@',
    userName: '0x7165662174c8b2A4e97d6321bb8caeBb3179940C',
    avater: 'https://avatars.githubusercontent.com/u/96198088?v=4',
    text: '一つのことを、一生やり続けられると確信する日がくる。',
    isProfileImageNft: false,
    timestamp: '2021-11-01T12:00:00.000Z',
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