import { useState } from 'react'

function IndexPopup() {
  const [data, setData] = useState('')

  return (
    <div className='flex w-300px'>
      <div>英语</div>
      <div>中文(简体)</div>
    </div>
  )
}

export default IndexPopup
