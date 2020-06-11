import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)

  useEffect(() => {
    darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
  }, [darkMode])

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleMode]
}

