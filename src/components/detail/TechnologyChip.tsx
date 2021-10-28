import { Chip } from '@material-ui/core'

type Props = {
  label: string
  color: string
}

const TechnologyChip = ({ label, color }: Props) => {
  return (
    <div>
      <Chip label={label} style={{ backgroundColor: color, color: 'white' }} />
    </div>
  )
}

export default TechnologyChip
