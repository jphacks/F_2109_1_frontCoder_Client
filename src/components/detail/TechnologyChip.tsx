import { Chip } from '@mui/material'

type Props = {
  label: string
  color: string
}

const TechnologyChip = ({ label, color }: Props): JSX.Element => {
  return (
    <div>
      <Chip label={label} style={{ backgroundColor: color, color: 'white' }} />
    </div>
  )
}

export default TechnologyChip
