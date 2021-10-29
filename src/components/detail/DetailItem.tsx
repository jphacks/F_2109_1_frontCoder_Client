import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

type Props = {
  item: string
  children: React.ReactNode
}

const Border = styled.div`
  padding-top: 20px;
  border-bottom: 1px solid #ccc;
`

const DetailItem = ({ item, children }: Props): JSX.Element => {
  return (
    <Border>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Grid item xs={3}>
          <Typography paragraph>{item}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Grid container justifyContent="flex-end" alignItems="flex-end">
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Border>
  )
}

export default DetailItem
