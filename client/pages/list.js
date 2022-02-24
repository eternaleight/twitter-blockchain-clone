import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Transition from '../components/ui/Transition'
import Link from 'next/link'
import Menu from '../components/ui/Menu'
import RadioGroup from '../components/ui/RadioGroup'
import Switch from '../components/ui/Switch'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  banjyo: `max-w-[350px] max-h-[300px] p-[10px] w-[80%] pt-[50px] hover:opacity-[0.8]`,
}

const list = () => {
  return (
    <div>
      <Link href="/">
        <div className={`w-screen flex wrap justify-around text-white bg-[#15202b] flex-wrap hover:bg-slate-700 cursor-pointer`}>home </div>
      </Link>
      <div className={`${style.wrapper} flex wrap justify-around flex-wrap `}>List

        <RadioGroup />
        <Switch />
        {/* <img className='flex-wrap w-[250px] h-[200px] mt-[7vh] p-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1inLywmsyHAMuV9D1VdKW0PZsx9RawIayulqNLlvl-lYbhc5YLIy-8tsGlN0YQffrFL0&usqp=CAU' /> */}

        <img className={`${style.banjyo} cursor-pointer`} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOnO2LEE0Zy-OZpZO1jH051avx7Ft6abUUtxUuiV8LxdkLiTWRFwMuct_lcqzcKKkCbI&usqp=CAU' />
        <Transition item='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1inLywmsyHAMuV9D1VdKW0PZsx9RawIayulqNLlvl-lYbhc5YLIy-8tsGlN0YQffrFL0&usqp=CAU' />
        <Transition item='http://osiriblog.online/wp-content/uploads/2021/12/395996a5152bc0cb49d533395e2d7fbe.png' />
        <Transition item='image-5.png' />
        <Transition item='https://i.ytimg.com/vi/Qx9TeHoQQeo/hqdefault.jpg' />
        <Transition item='https://dengekionline.com/images/BSNY/wwjW/ZvNl/Xzhj/DCdQoYWHtHUUBoH1z4pwCgx6j1UzVSE5WvSj3vJcA6QgEXJPCxAi8yKZLiq2kBD3SIRXOK0Bg1vYxVtV_main.jpg' />
        <Transition item='https://cdn-ak.f.st-hatena.com/images/fotolife/T/Tea_Wind/20210516/20210516135227.png' />
        {/* <Transition item='http://osiriblog.online/wp-content/uploads/2021/12/395996a5152bc0cb49d533395e2d7fbe.png' /> */}
        {/* <Transition item='https://i.ytimg.com/vi/Qx9TeHoQQeo/hqdefault.jpg' /> */}
      </div>
    </div>
  )
}

export default list