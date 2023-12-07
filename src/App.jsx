import './App.css'
import Navbar from './components/Navbar'
import Reload from './components/Reload'
import RandomCard from './components/RandomCard'
import Container from '@mui/system/Container'
import Box from '@mui/system/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.boredapi.com/api/activity')
        const result = await response.json()
        setData(result)
      } catch (error) {
          console.error('Error fetching data:', error)
      } finally {
          setLoading(false)
      }
    }
    fetchData();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#0f172a',
        contrastText: '#f1f5f9'
      },
      secondary: {
        main: '#1e293b',
        contrastText:'#f8fafc'
      }
    }
  })


  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar name='Random Activity'></Navbar> 
        <Reload></Reload>
        {
          loading ? (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          ) : (
            <Container maxWidth="lg">
              <Box sx={{margin: '15vw'}}>
                  <RandomCard type={data.type} activity={data.activity} participants={data.participants}></RandomCard>
              </Box>
            </Container>
          )
        }
      </ThemeProvider>
    </>
  )
}

export default App
