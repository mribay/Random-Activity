import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Badge from '@mui/icons-material/Badge'
import PersonIcon from '@mui/icons-material/Person'

function RandomCard({type, activity, participants}) {

  let typeUppercase = type.toUpperCase()
  let participantsText = ""
  if (participants > 1) {
    participantsText = "participants"
  } else {
    participantsText = "participant"
  }

  return (
    <>
        <Card variant="outlined" sx={{ bgcolor: '#1e293b', color: 'secondary.contrastText'}}>
            <CardContent>
                <Typography sx={{ mb: 5, fontSize: 14, textAlign: 'left', fontWeight: 'bold' }} color="#cbd5e1" gutterBottom>
                  {typeUppercase}
                </Typography>
                <Typography color='#f8fafc' variant="h5" component="div" sx={{textAlign: 'center'}}>
                  {activity}
                </Typography>
                <Typography sx={{ mt: 5, textAlign: 'right' }} color="#cbd5e1">
                  {participants} {participantsText}
                </Typography>
            </CardContent>
        </Card>
    </>
  )
}

export default RandomCard