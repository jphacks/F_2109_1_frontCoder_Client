import React from 'react'
import firebase from '../config/firebase'
import LoadingOverlay from 'react-loading-overlay'
import RequireLogin from '../pages/RequireLogin'
import Header from '../components/Header'

class Auth extends React.Component {
  state = {
    signinCheck: false, //ログインチェックが完了してるか
    signedIn: false, //ログインしてるか
    user: null,
  }

  _isMounted = false //unmountを判断（エラー防止用）

  componentDidMount = () => {
    //mountされてる
    this._isMounted = true

    //ログインしてるかどうかチェック
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //してる
        if (this._isMounted) {
          this.setState({
            signinCheck: true,
            signedIn: true,
            user: user,
          })
        }
      } else {
        //してない
        if (this._isMounted) {
          this.setState({
            signinCheck: true,
            signedIn: false,
            user: null,
          })
        }
      }
    })
  }

  componentWillUnmount = () => {
    this._isMounted = false
  }

  render() {
    //チェックが終わってないなら（ローディング表示）
    if (!this.state.signinCheck) {
      return (
        <LoadingOverlay active={true} spinner text="Loading...">
          <div style={{ height: '100vh', width: '100vw' }}></div>
        </LoadingOverlay>
      )
    }

    //チェックが終わりかつ
    if (this.state.signedIn) {
      //サインインしてるとき（そのまま表示）
      return (
        <>
          <Header user={this.state.user} />
          {this.props.children}
        </>
      )
    } else {
      //してないとき（ログイン画面にリダイレクト）
      return (
        <>
          <Header user={null} />
          <RequireLogin />
        </>
      )
    }
  }
}

export default Auth
