
const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  banjyo: `w-9vw h-10vh max-w-[300px] max-h-[300px] p-[30px] hover:opacity-[0.8]`,
}

const list = () => {
  return (
    <div className={`${style.wrapper} flex wrap justify-around`}>List
      <img className='max-w-[800px] max-h-[600px] py-[50px] hover:bg-[#111111] duration-1000' src='image-5.png' />
      <div className="cursor-pointer ">
        <img className={style.banjyo} src='名称未設定211q.png' />
        <img className={style.banjyo} src='名称未設定211q.png' />
        <img className={style.banjyo} src='名称未設定211q.png' />
        <img className={style.banjyo} src='名称未設定211q.png' />
      </div>
    </div>
  )
}

export default list