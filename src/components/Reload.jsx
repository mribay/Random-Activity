import React from 'react'
import Fab from '@mui/material/Fab'
import ReplayIcon from '@mui/icons-material/Replay'

function Reload() {

  const handleClick = () => {
    window.location.reload()
  }

  return (
    <>
        <div className='Reload'>
            <Fab color="primary" aria-label="add" onClick={handleClick}>
                <ReplayIcon />
            </Fab>
        </div>
    </>
  )
}

export default Reload