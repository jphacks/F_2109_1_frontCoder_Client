import { Box, Button, Grid, Typography } from '@material-ui/core'
import { useParams } from 'react-router'
import DetailItem from './detail/DetailItem'
import { DetailParams } from '../types/params'
import styled from 'styled-components'
import TechnologyChip from './detail/TechnologyChip'
import PreviewImage from '../images/thumbnail.png'
import { Problem } from '../types/schema'
import { useEffect, useState } from 'react'
import fetchProblem from '../api/fetchProblem'

const Bold = styled.span`
  font-size: 40px;
`

const ImageFrame = styled.img`
  width: 100%;
  height: 95vh;
  object-fit: cover;
`

function Detail() {
  const { problemId } = useParams<DetailParams>()
  const [problem, setProblem] = useState<Partial<Problem>>({})

  useEffect(() => {
    ;(async () => {
      const _problem = await fetchProblem({ id: problemId })
      console.log(_problem)
      setProblem(_problem)
    })()
  }, [problemId])

  const technologies = [
    { label: 'HTML5', color: '#E98136' },
    { label: 'Web Components', color: '#000000' },
    { label: 'CSS3', color: '#0070BA' },
    { label: 'Sass', color: '#CB83DD' },
    { label: 'JavaScirpt', color: '#E9C136' },
  ]

  const startProblem = () => {}

  return (
    <Box>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h2" component="h1">
            {problem?.title ?? ''}
          </Typography>
          <Box my={2}>
            <Typography>{problem?.description ?? '-'}</Typography>
          </Box>
          <DetailItem item="難易度">
            <Typography>
              Lv
              <Bold>2</Bold>
            </Typography>
          </DetailItem>
          <DetailItem item="目安時間">
            <Typography>
              <Bold>30</Bold>分
            </Typography>
          </DetailItem>
          <DetailItem item="使用技術">
            {technologies.map((tech) => (
              <Box mx={0.3} my={0.5}>
                <TechnologyChip
                  label={tech.label}
                  color={tech.color}
                  key={tech.label}
                />
              </Box>
            ))}
          </DetailItem>
          <Box mt={6}>
            <Grid container justifyContent="center" alignItems="center">
              <Button
                href="/search"
                onClick={startProblem}
                variant="contained"
                color="primary"
                size="large"
              >
                START
              </Button>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <ImageFrame src={PreviewImage} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Detail
