import { useEffect, useState } from "react"

type Mode = 'light' | 'dark'  | null ;

const useThemeSwitcher = () => {

  const preferDarkQuery = "(prefer-color-scheme: dark)"
  const theme =  window.localStorage.getItem('theme')
  const [mode, setMode] = useState<any>(theme)

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPreference = window.localStorage.getItem('theme')

    const handleChange = () => {
      if (userPreference) {
        let check: string = userPreference === 'dark' ? 'dark' : 'light'
        setMode(check)

        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } else {
        let check = mediaQuery.matches ? 'dark' : 'light'
        setMode(check);

        if (check === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }, [mode])



  return [mode, setMode]
}

export default useThemeSwitcher
