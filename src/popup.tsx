import { useState } from 'react'
import './popup.css'

const tabs = [
  { label: '英语', key: 'eng' },
  { label: '中文(简体)', key: 'zh' }
]

function IndexPopup() {
  const [active, setActive] = useState('eng') // 当前选中

  /** 关闭 */
  const onClose = () => {
    // chrome
    console.log('关闭')
  }

  return (
    <>
      <div className='header'>
        <div className='translate-box'>
          {
            tabs.map(item => (
              <div
                className={`item ${active === item.key ? 'active' : ''}`}
                key={item.key}
                onClick={() => setActive(item.key)}
              >
                { item.label }
              </div>
            ))
          }
        </div>

        <div
          className='close'
          onClick={onClose}
        />
      </div>

      <div className='footer'>
        South 翻译
      </div>
    </>
  )
}

export default IndexPopup
