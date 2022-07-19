import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'

export interface ImgProps extends ImageProps {
  width: number | string
  height?: number | string
  aspectRatio?: string
}

export interface ImgWrapper {
  width: number | string
  height?: number | string
  aspectRatio?: string
}

const ImgWrapper = styled.div`
  position: relative;
  width: ${({ width }: ImgWrapper) =>
    typeof width === 'number' ? `${width}px` : width};
  height: ${({ height }: ImgWrapper) =>
    typeof height === 'number' ? `${height}px` : height};
  aspect-ratio: ${({ aspectRatio }: ImgWrapper) => aspectRatio};
`

export default function Img({
  src,
  width,
  height = 'auto',
  aspectRatio = '1 / 1',
  style,
  ...rest
}: ImgProps) {
  return (
    <ImgWrapper
      width={width}
      height={height}
      aspectRatio={aspectRatio}
      style={style}
    >
      <Image src={src} objectFit='contain' layout='fill' alt='' {...rest} />
    </ImgWrapper>
  )
}
