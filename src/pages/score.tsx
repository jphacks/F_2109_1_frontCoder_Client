import { VFC } from 'react'
import Header from '../components/Header'
// import Footer from './components/Footer'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

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
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {/* <Button style={{ backgroundColor: '#F87896', color: '#FFFFFF' }}>
            提出
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const Score: VFC = () => {
  return (
    <Container>
      <Header user={null} />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          padding: '0 0 100px 0',
        }}
      >
        <Container sx={{ padding: '10px 0' }}>
          <Box
            sx={{
              backgroundColor: 'rgb(93,170,15)',
              borderRadius: '130px',
              width: '90%',
              margin: '0 auto',
            }}
          >
            <Box sx={{ height: '30px' }}></Box>
            <Box
              sx={{
                width: '60%',
                margin: '0 auto',
                // backgroundColor: 'rgb(250,250,240)',
                textAlign: 'center',
                fontSize: '30px',
                color: 'white',
              }}
            >
              <h2>採点結果</h2>
            </Box>
            <Box sx={{ height: '0px' }}></Box>
            <Box
              sx={{
                margin: '0 auto',
                maxWidth: '50%',
                height: '400px',
                backgroundColor: 'rgb(230, 230, 250)',
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              <i>HTML IMG here...</i>
            </Box>
            <Box sx={{ height: '50px' }}></Box>
            <SpanningTable></SpanningTable>
            <Box sx={{ height: '150px' }}></Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Container>
  )
}

//////////////////////////////////////////

const TAX_RATE = 0.07

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`
}

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

const SpanningTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: '10px',
        maxWidth: '80%',
        margin: '0 auto',
        backgroundColor: 'rgb(255, 245, 240)',
      }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow
            sx={{
              width: '100%',
            }}
          >
            <TableCell
              align="right"
              sx={{ fontWeight: 'bold', fontSize: '20px' }}
            >
              採点項目
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: 'bold', fontSize: '20px' }}
            >
              採点結果
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              デザイン
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: 'bold', fontSize: '20px' }}
            >
              40
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              コード
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: 'bold', fontSize: '20px' }}
            >
              33
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>
              <Container
                sx={{ fontFamily: '', fontWeight: 'bold', fontSize: '30px' }}
              >
                <Box sx={{ float: 'left' }}>Total</Box>
                <Box sx={{ float: 'right', color: 'red' }}>73</Box>
              </Container>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Score
