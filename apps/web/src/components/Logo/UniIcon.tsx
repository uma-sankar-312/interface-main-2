import styled from 'styled-components'

import HolidayUniIcon from './HolidayUniIcon'

// ESLint reports `fill` is missing, whereas it exists on an SVGProps type
export type SVGProps = React.SVGProps<SVGSVGElement> & {
  fill?: string
  height?: string | number
  width?: string | number
  gradientId?: string
  clickable?: boolean
}

export const UniIcon = ({ clickable, ...props }: SVGProps) => (
  <Container clickable={clickable}>
    {HolidayUniIcon(props) !== null ? (
      <HolidayUniIcon {...props} />
    ) : (
      <img src="/images/text.png" width="45px" />
      
    )}
  </Container>
)

const Container = styled.div<{ clickable?: boolean }>`
  position: relative;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
`
