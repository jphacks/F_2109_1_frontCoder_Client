import ActionAreaCard from '../components/ActionAreaCard'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const TitleTypography = styled(Typography)({
  paddingTop: 24,
  fontWeight: 500,
  paddingBottom: 32,
})

const CustamizedAccessTimeIcon = styled(AccessTimeIcon)({
  paddingRight: 16,
})

export default function Competitions() {
  const [problem, setProblem] = useState([])
  axios
    .get('/v0.2.0/problem') //リクエストを飛ばすpath
    .then((response) => {
      setProblem(response.data)
    }) //成功した場合、postsを更新する（then）
    .catch(() => {
      console.log('通信に失敗しました')
    })
  return (
    <div>
      <Header />
      <Container>
        <TitleTypography variant="h4">
          <CustamizedAccessTimeIcon />
          Active Problems
        </TitleTypography>
        <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={6} md={4} lg={3}>
            <ActionAreaCard
              id="222"
              title="2021 Kaggle Machine Learning & Data Science Survey"
              description="The most comprehensive dataset available on the state of ML and data science"
              image=""
              createdAt={new Date(2021, 11, 15, 22, 30)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ActionAreaCard
              id="222"
              title="2021 Kaggle Machine Learning & Data Science Survey"
              description="The most comprehensive dataset available on the state of ML and data science"
              image=""
              createdAt={new Date(2021, 11, 15, 22, 30)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ActionAreaCard
              id="222"
              title="2021 Kaggle Machine Learning & Data Science Survey"
              description="The most comprehensive dataset available on the state of ML and data science"
              image=""
              createdAt={new Date(2021, 11, 15, 22, 30)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ActionAreaCard
              id="222"
              title="2021 Kaggle Machine Learning & Data Science Survey"
              description="The most comprehensive dataset available on the state of ML and data science"
              image=""
              createdAt={new Date(2021, 11, 15, 22, 30)}
            />
          </Grid> */}
          {problem.map(
            (get: {
              id: string
              image: string
              title: string
              description: string
              createdAt: Date
            }) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ActionAreaCard
                  id={get.id}
                  title={get.title}
                  description={get.description}
                  image={get.image}
                  createdAt={get.createdAt}
                />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </div>
  )
}
