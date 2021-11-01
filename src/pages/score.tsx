import { VFC } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useParams } from 'react-router'
import Grid from '@mui/material/Grid'
import { useHistory, useLocation } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import SportsScoreIcon from '@mui/icons-material/SportsScore'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

const TitleTypography = styled(Typography)({
  paddingTop: 24,
  fontWeight: 500,
  paddingBottom: 32,
  display: 'inline',
})

const LinkTypography = styled(Typography)({
  color: 'deepskyblue',
  paddingTop: 4,
})

const StyledScore = styled(Typography)({
  fontWeight: 500,
})

const CustamizedGroupIcon = styled(SportsScoreIcon)({
  paddingRight: 16,
  paddingTop: 24,
  paddingLeft: 32,
  fontSize: 40,
  verticalAlign: 'bottom',
})

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'white',
    color: 'black',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: 'white',
    color: 'black',
  },
}))

const StyledTableRow = styled(TableRow)(() => ({
  backgroundColor: 'white',
  textAlign: 'center',
  color: 'black',
}))

const StyledTable = styled(Table)(() => ({
  maxWidth: '500px',
  textAlign: 'center',
}))

const StyledBox = styled(Box)(() => ({
  backgroundColor: '#5cb85c',
  color: 'white',
}))

const DetailBox = styled(Box)(() => ({
  backgroundColor: '#5cb85c',
  color: 'white',
}))

const Footer: VFC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          top: 'auto',
          bottom: 0,
        }}
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}></Toolbar>
      </AppBar>
    </Box>
  )
}

export type ScoreParams = {
  imageURL: string
  imageScore: string
  testScore: string
}

const Score: VFC = () => {
  const location = useLocation()
  const { imageURL, imageScore, testScore } = useParams<ScoreParams>()
  const _imageURL = imageURL.replace(/~/g, '/')
  const imgScore = Number(imageScore) / 2
  const tstScore = Number(testScore) / 2
  const score = imgScore + tstScore
  return (
    <>
      <Container>
        <TitleTypography variant="h4" className="futura">
          <CustamizedGroupIcon />
          Result
        </TitleTypography>
        <Box ml={5}>
          <Box mt={5}>
            <Grid container justifyContent="center" spacing={5}>
              <Grid item xs={4}>
                <StyledBox px={4} py={3}>
                  <Typography variant="h5" align="center">
                    Score
                  </Typography>
                  <StyledScore variant="h2" align="center">
                    {score}
                    <Typography variant="body1" component="span">
                      /100
                    </Typography>
                  </StyledScore>
                </StyledBox>
                {location.state !== undefined ? (
                  <Link
                    href={'/' + location.state['id'] + '/ranking'}
                    underline="none"
                  >
                    <LinkTypography variant="h6">Ranking Page</LinkTypography>
                  </Link>
                ) : (
                  <a></a>
                )}
                <Link href="/" underline="none">
                  <LinkTypography variant="h6">Top Page</LinkTypography>
                </Link>
              </Grid>
              <Grid item xs>
                {/* <Box mb={3}>
                  <Typography variant="h4" className="futura">
                    Evaluation
                  </Typography>
                </Box> */}
                <SpanningTable
                  imageScore={imgScore}
                  testScore={tstScore}
                ></SpanningTable>
                {/* {location.state !== undefined ? (
                  <a href={'/' + location.state['id'] + '/ranking'}>
                    ランキングを見る
                  </a>
                ) : (
                  <a></a>
                )} */}
              </Grid>
            </Grid>
            {/* <DetailBox>
              <Box py={1}>
                <Typography variant="h6" align="center">
                  詳細を見る
                </Typography>
              </Box>
            </DetailBox> */}
            <Box my={3}>
              <iframe
                className="w-100"
                src={_imageURL}
                style={{ height: '700px' }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

const SpanningTable = (props: { imageScore: number; testScore: number }) => {
  return (
    <StyledTable>
      <Table sx={{ minWidth: 350 }} aria-label="spanning table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center" className="ranking_header">
              採点項目
            </StyledTableCell>
            <StyledTableCell align="center" className="ranking_header">
              採点結果
            </StyledTableCell>
            {/* <StyledTableCell align="center" className="ranking_header">
              詳細
            </StyledTableCell> */}
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" className="ranking">
              デザイン
            </StyledTableCell>
            <StyledTableCell align="center" className="ranking_number">
              {props.imageScore}
            </StyledTableCell>
            {/* <StyledTableCell
              align="center"
              className="ranking_number"
            ></StyledTableCell> */}
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" className="ranking">
              コード
            </StyledTableCell>
            <StyledTableCell align="center" className="ranking_number">
              {props.testScore}
            </StyledTableCell>
            {/* <StyledTableCell
              align="center"
              className="ranking_number"
            ></StyledTableCell> */}
          </StyledTableRow>
        </TableHead>
        {/* <TableBody>
          <StyledTableRow>
            <StyledTableCell rowSpan={3} />
            <StyledTableCell align="center" className="ranking">
              <Container
                sx={{ fontFamily: '', fontWeight: 'bold', fontSize: '30px' }}
              >
                <Box sx={{ float: 'left' }}>
                  <Typography variant="h2" align="center">
                    Total
                  </Typography>
                </Box>
                <Box sx={{ float: 'right', color: 'red' }}>
                  <Typography variant="h2" align="center">
                    73
                  </Typography>
                </Box>
              </Container>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody> */}
      </Table>
    </StyledTable>
  )
}

export default Score
