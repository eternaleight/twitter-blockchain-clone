import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Transition from '../components/ui/Transition'
import Link from 'next/link'
import Menu from '../components/ui/Menu'
import RadioGroup from '../components/ui/RadioGroup'

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

      <div className={`${style.wrapper} flex wrap justify-around flex-wrap`}>List
        <RadioGroup />
        <img className={`${style.banjyo} cursor-pointer`} src='image-5.png' />
        <Transition item='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1inLywmsyHAMuV9D1VdKW0PZsx9RawIayulqNLlvl-lYbhc5YLIy-8tsGlN0YQffrFL0&usqp=CAU' />
        <Transition item='名称未設定211q.png' />
      </div>
    </div>
  )
}

export default list