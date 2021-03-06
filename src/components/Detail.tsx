import { Box, Button, Grid, Typography } from '@mui/material'
import { useHistory, useParams } from 'react-router'
import DetailItem from './detail/DetailItem'
import { DetailParams } from '../types/params'
import styled from 'styled-components'
import TechnologyChip from './detail/TechnologyChip'
import { Problem } from '../types/schema'
import { useEffect, useState } from 'react'
import fetchProblem from '../api/fetchProblem'
import { pages } from '../const/pages'

const Bold = styled.span`
  font-size: 40px;
`

function Detail(): JSX.Element {
  const { problemId } = useParams<DetailParams>()
  const [problem, setProblem] = useState<Partial<Problem>>({})
  const history = useHistory()

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

  const startProblem = (): void => {
    history.push(pages.problemCoding.path(problemId))
  }

  return (
    <Box sx={{ justifyContent: 'center' }} mt={4}>
      <Grid
        container
        justifyContent="center"
        spacing={5}
        alignItems="flex-start"
      >
        <Grid item xs></Grid>
        <Grid item xs={12} sm={4}>
          <Box px={5}>
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
                <Bold>30</Bold> 分
              </Typography>
            </DetailItem>
            <DetailItem item="使用技術">
              {technologies.map((tech) => (
                <Box mx={0.3} my={0.5} key={tech.label}>
                  <TechnologyChip label={tech.label} color={tech.color} />
                </Box>
              ))}
            </DetailItem>
            <Box mt={6}>
              <Grid container justifyContent="center" alignItems="center">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={startProblem}
                >
                  START
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Box mt={5}>
            <img className="w-40" src={`/problem/p${problem.id}.png`}></img>
          </Box>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Box>
  )
}

export default Detail
