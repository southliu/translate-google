import type { PlasmoCSConfig } from 'plasmo'
import { useEffect } from 'react'

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

function ContentPage() {
  useEffect(() => {
    console.log(
      "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
    )

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      console.log('contents message:', message)
      console.log('contents sender:', sender)
      console.log('contents sendResponse:', sendResponse)
    })
  }, [])

  return (
    <div>contents</div>
  )
}

export default ContentPage