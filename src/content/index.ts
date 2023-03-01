import type { PlasmoCSConfig } from 'plasmo'

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

export {}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // console.log('contents document:', document)
  console.log('contents message:', message)
  console.log('contents sender:', sender)
  console.log('contents sendResponse:', sendResponse)
})
