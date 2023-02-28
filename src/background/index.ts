import type { PlasmoCSConfig } from 'plasmo'

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('background message:', message)
  console.log('background sender:', sender)
  console.log('background sendResponse:', sendResponse)
})
