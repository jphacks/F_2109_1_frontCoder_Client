import { Box, Button, Chip, Grid, Typography } from '@material-ui/core'
import { useParams } from 'react-router'
import DetailItem from '../components/detail/DetailItem'
import { DetailParams } from '../types/params'
import styled from 'styled-components'
import TechnologyChip from '../components/detail/TechnologyChip'
import PreviewImage from '../images/thumbnail.png'

const Bold = styled.span`
  font-size: 40px;
`

const ImageFrame = styled.img`
  width: 100%;
`

function Detail() {
  const { broadcastId } = useParams<DetailParams>()
  const technologies = [
    { label: 'HTML5', color: '#E98136' },
    { label: 'Web Components', color: '#000000' },
    { label: 'CSS3', color: '#0070BA' },
    { label: 'Sass', color: '#CB83DD' },
    { label: 'JavaScirpt', color: '#E9C136' },
  ]

  return (
    <Box>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item xs={6}>
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
              <TechnologyChip label={tech.label} color={tech.color} />
            ))}
          </DetailItem>
          <Box mt={6}>
            <Grid container justifyContent="center" alignItems="center">
              <Button variant="contained" color="primary" size="large">
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
