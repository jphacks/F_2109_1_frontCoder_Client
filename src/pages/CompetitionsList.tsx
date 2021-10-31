import ActionAreaCard from '../components/ActionAreaCard'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { useHistory } from 'react-router'
import { pages } from '../const/pages'
import { Problem } from '../types/schema'
import { Box } from '@mui/system'
import fetchProblems from '../api/fetchProblems'

const TitleTypography = styled(Typography)({
  paddingTop: 24,
  fontWeight: 500,
  paddingBottom: 32,
})

const CustamizedAccessTimeIcon = styled(AccessTimeIcon)({
  paddingRight: 16,
  paddingLeft: 32,
  fontSize: 40,
  verticalAlign: 'bottom',
})

export default function CompetitionsList(): JSX.Element {
  const [problems, setProblems] = useState<Problem[]>([])
  const history = useHistory()
  useEffect(() => {
    axios
      .get('https://frontcoder.net/v0.2.0/problem') //リクエストを飛ばすpath
      .then((response) => {
        console.log(response.data['problem'])
        setProblems(response.data['problem'])
      }) //成功した場合、postsを更新する（then）
      .catch(() => {
        console.log('通信に失敗しました')
      })
  }, [])
  useEffect(() => {
    ;(async () => {
      const _problems = await fetchProblems()
      setProblems(_problems)
    })()
  }, [])

  const seeProblemDetail = (id: string) => {
    console.log(id)
    history.push(pages.problemDetail.path(id))
  }

  return (
    <div>
      <Container>
        <TitleTypography variant="h4" className="futura">
          <CustamizedAccessTimeIcon />
          Active Problems
        </TitleTypography>
        <Grid container spacing={2}>
          {problems.map(
            (get: {
              id: number
              image: string
              title: string
              description: string
              created_at: Date
            }) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={get.id}>
                <Box mb={2} onClick={() => seeProblemDetail(String(get.id))}>
                  <ActionAreaCard
                    id={String(get.id)}
                    title={get.title}
                    description={get.description}
                    image={String(get.id)}
                    createdAt={get.created_at}
                  />
                </Box>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </div>
  )
}
