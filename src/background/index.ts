chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('background message:', message)
  console.log('background sender:', sender)
  console.log('background sendResponse:', sendResponse)
})

export const getBgMessage = () => {
  console.log('getMessage')
}