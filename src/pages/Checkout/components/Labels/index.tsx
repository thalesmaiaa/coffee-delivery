import { Subtitle, Title } from './styles'

type LabelsProps = {
  title: string
  subtitle: string
}

export function Labels({ title, subtitle }: LabelsProps) {
  return (
    <div>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  )
}
