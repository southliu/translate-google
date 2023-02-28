import { useState } from 'react'
import '../../assets/style.css'

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
    chrome.tabs.query({ currentWindow: true, active: true }, async (tabs) => {
      if (tabs.length) {
        const { id } = tabs[0]
        console.log('id:', id)
        try {
          const data = await chrome.runtime.sendMessage({
            type: 'msg',
            msg: '开发中...'
          }, callback => {
            console.log('callback:', callback)
          })
          console.log('data:', data)

        } catch(err) {
          console.log('信息发送失败：', err)
        }
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
  // const onClose = () => {
  //   console.log('关闭')
  // }

  // 翻译项样式
  const itemClassName = `
    w-full
    px-3
    py-2
    text-xs
    font-bold
    cursor-pointer
    whitespace-nowrap
    border-2
    border-transparent
    text-dark-50
  `

  return (
    <>
      <div className='flex px-3 py-2 box-border'>
        <div className='flex border-b border-light-900'>
          {
            tabs.map(item => (
              <div
                className={`
                  ${itemClassName}
                  ${
                    active === item.key ?
                    '!border-blue-600 !text-blue-600' : ''
                  }
                `}
                key={item.key}
                onClick={() => onChangeLang(item.key)}
              >
                { item.label }
              </div>
            ))
          }
        </div>

        {/* <div
          className='text-xs cursor-pointer ml-2'
          onClick={onClose}
        >
          x
        </div> */}
      </div>

      <div className={`
        w-full
        px-3
        py-2
        bg-gray-100
        border-t-1
        border-gray-400
      `}>
        South 翻译
      </div>
    </>
  )
}

export default IndexPopup
