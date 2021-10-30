import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { db } from '../config/firebase'
import { useEffect, useState } from 'react'
import RankingList from '../components/RankingList'
import GroupIcon from '@mui/icons-material/Group'
import { MyContext } from '../function/Auth'

const TitleTypography = styled(Typography)({
  paddingTop: 24,
  fontWeight: 500,
  paddingBottom: 32,
  display: 'inline',
})

const CustamizedGroupIcon = styled(GroupIcon)({
  paddingRight: 16,
  paddingTop: 24,
  paddingLeft: 32,
  fontSize: 40,
  verticalAlign: 'bottom',
})

const SubtitleTypography = styled(Typography)({
  paddingLeft: 32,
  display: 'inline',
})

export default function CompetitionsList(props: any): JSX.Element {
  const [score, setScore] = useState(0)
  const [user, setUser]: any = useState('')
  const [ranking, setRanking] = useState([])
  const [scorelist, setScoreList]: any = useState([])
  const tmp: any = []
  const scoretmp: any = []
  console.log(user)
  // ranking
  useEffect(() => {
    db.collection('score')
      .orderBy('score', 'desc')
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((doc) => {
          tmp.push(doc.data())
          scoretmp.push(doc.data()['score'])
        })
      )
      .then(() => {
        setRanking(tmp)
        setScoreList(scoretmp)
      })
      .catch((error) => {
        console.log('Error getting documents: ', error)
      })
  }, [])
  if (user) {
    // useEffect(() => {
    db.collection('score')
      .doc(user)
      .get()
      .then((doc: any) => {
        if (doc.exists) {
          setScore(doc.data()['score']) // 1 問題id 0 0番目スコア
        }
      })
    // }, [])
  }
  return (
    <div>
      <MyContext.Consumer>{(value) => setUser(value)}</MyContext.Consumer>
      <Container>
        <TitleTypography variant="h4" className="futura">
          <CustamizedGroupIcon />
          Realtime Ranking
          <SubtitleTypography variant="h6" className="futura">
            {/* Kaggle 2021 Kite AI Competiton   タイトル取得できれば */}
          </SubtitleTypography>
        </TitleTypography>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Grid container spacing={5}>
                <Grid item xs>
                  <Box mt={3}>
                    <Typography variant="body1" align="center">
                      順位(位)
                    </Typography>
                    <Typography variant="h2" align="center" className="futura">
                      {/* {scorelist} */}
                      {score ? scorelist.indexOf(score) + 1 : null}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Box mt={3}>
                    <Typography align="center" variant="body1">
                      スコア(p)
                    </Typography>
                    <Typography align="center" variant="h2" className="futura">
                      {score}
                    </Typography>
                  </Box>
                </Grid>
                {/* <Grid item xs>
                  <Box mt={3}>
                    <Typography variant="body1">提出回数(回)</Typography>
                    <Typography variant="h2" className="futura">
                      20
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Box mt={3}>
                    <Typography variant="body1">最終提出(日前)</Typography>
                    <Typography variant="h2" className="futura">
                      20
                    </Typography>
                  </Box>
                </Grid> */}
              </Grid>
            </Grid>
            <Grid item xs>
              <RankingList list={ranking} onlyscore={scorelist} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}
