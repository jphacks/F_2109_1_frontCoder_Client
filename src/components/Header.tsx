import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Login from '../components/Login'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import firebase from '../config/firebase'
import { toast } from 'react-toastify'
import { auth } from '../config/firebase'
import CodeOffIcon from '@mui/icons-material/CodeOff'
import logo from './logo.png'

const UsernameTypography = styled(Typography)({
  paddingLeft: 8,
})

export default function Header(props: {
  user: firebase.User | null
}): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        toast.success('ログアウトしました')
        window.location.reload()
      })
      .catch((error) => {
        toast.error('ログアウトはさせないぜ' + error)
      })
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        style={{
          backgroundColor: '#EEF0EF',
        }}
      >
        <Toolbar>
          <a href="/">
            <img src={logo} alt="FrontCoder" />
          </a>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: '600', fontSize: '30px' }}
          ></Typography>
          {!props.user ? (
            <Login />
          ) : (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <AccountCircle />
                <UsernameTypography variant="h6">
                  {props.user.displayName}
                </UsernameTypography>
              </IconButton>
              {auth.currentUser?.displayName ? null : '名無しさん'}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
