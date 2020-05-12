import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)

  darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');

  return [darkMode, setDarkMode]
}

