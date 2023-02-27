import { useState } from 'react'
import './index.css'

type IType = 'en' | 'zh'

interface ITabs {
  label: string;
  key: IType;
}

const tabs: ITabs[] = [
  { label: '英语', key: 'en' },
  { label: '中文(简体)', key: 'zh' }
]

function IndexPopup() {
  const [active, setActive] = useState<IType>('en') // 当前选中

  /** 翻译当前页面 */
  const translatePage = async () => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      if (tabs.length) {
        const { id } = tabs[0]
        console.log('id:', id)
        chrome.tabs.sendMessage(id, { type: 'tip', msg: '开发中...' })
      }
    })
  }

  /**
   * 切换语言
   * @param type - 类型
   */
  const onChangeLang = (type: IType) => {
    switch (type) {
      case 'en':
        break

      case 'zh':
        translatePage()
        break

      default:
        break 
    }

    setActive(type)
  }

  /** 关闭 */
  const onClose = () => {
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
                onClick={() => onChangeLang(item.key)}
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