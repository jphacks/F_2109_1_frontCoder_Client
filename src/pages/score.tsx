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
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import SportsScoreIcon from '@mui/icons-material/SportsScore'
import Paper from '@mui/material/Paper'

const TitleTypography = styled(Typography)({
  paddingTop: 24,
  fontWeight: 500,
  paddingBottom: 32,
  display: 'inline',
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
}

const Score: VFC = () => {
  const { imageURL, imageScore } = useParams<ScoreParams>()
  const _imageURL = imageURL.replace(/~/g, '/')
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
              <Grid item xs>
                <StyledBox px={4} py={3}>
                  <Typography variant="h5" align="center">
                    Score
                  </Typography>
                  <StyledScore variant="h2" align="center">
                    73
                    <Typography variant="body1" component="span">
                      /100
                    </Typography>
                  </StyledScore>
                </StyledBox>
              </Grid>
              <Grid item xs>
                <SpanningTable imageScore={imageScore}></SpanningTable>
              </Grid>
            </Grid>
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

const TAX_RATE = 0.07

function priceRow(qty: number, unit: number) {
  return qty * unit
}

function createRow(desc: string, qty: number, unit: number) {
  const price = priceRow(qty, unit)
  return { desc, qty, unit, price }
}

interface Row {
  desc: string
  qty: number
  unit: number
  price: number
}

function subtotal(items: readonly Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0)
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
]

const invoiceSubtotal = subtotal(rows)
const invoiceTaxes = TAX_RATE * invoiceSubtotal
const invoiceTotal = invoiceTaxes + invoiceSubtotal

const SpanningTable = (props: { imageScore: string }) => {
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
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" className="ranking">
              デザイン
            </StyledTableCell>
            <StyledTableCell align="center" className="ranking_number">
              {props.imageScore}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center" className="ranking">
              コード
            </StyledTableCell>
            <StyledTableCell align="center" className="ranking_number">
              33
            </StyledTableCell>
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
      <a href="/ranking">ランキングを見る</a>
    </StyledTable>
  )
}

export default Score
