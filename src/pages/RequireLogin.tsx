import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Login from '../components/Login'

const TitleTypography = styled(Typography)({
  paddingTop: 24,
  fontWeight: 500,
  paddingBottom: 32,
})

export default function RequireLogin() {
  return (
    <div>
      <Container>
        <TitleTypography variant="h4"></TitleTypography>
      </Container>
    </div>
  )
}
