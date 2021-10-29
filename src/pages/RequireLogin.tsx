import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const TitleTypography = styled(Typography)({
  paddingTop: 24,
  fontWeight: 500,
  paddingBottom: 32,
})

export default function RequireLogin(): JSX.Element {
  return (
    <div>
      <Container>
        <TitleTypography variant="h4"></TitleTypography>
      </Container>
    </div>
  )
}
