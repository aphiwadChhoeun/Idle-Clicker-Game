export function isLocalStorageSupported() {
  const test = 'test'
  try {
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}

export default function createPersistPlugin() {
  return store => {
    store.subscribe((mutation, state) => {
      const copyState = { ...state }
      delete copyState.Modal
      localStorage.setItem('ClickerGame', JSON.stringify(copyState))
    })
  }
}
