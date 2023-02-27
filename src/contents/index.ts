chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('contents message:', message)
  console.log('contents sender:', sender)
  console.log('contents sendResponse:', sendResponse)
})

export const getMessage = () => {
  console.log('getMessage')
}