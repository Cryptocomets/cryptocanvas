// @flow
import * as React from 'react'
import './styles/PixelInfoPopup.css'
import { Card, Icon } from 'antd'
import type { PixelIndex } from '../../types/PixelIndex'
import PixelInfoPopupPainter from './PixelInfoPopupPainter'
import { ClickableColorPreview } from '../ColorPreview/ClickableColorPreview'

type Props = {
  pixelPopup: PixelIndex,
  offsetX: number,
  offsetY: number,
  colorId: number,
  canvasId: number,
  pixelSize: number,
  onCopyColor: (colorId: number) => void,
  onClose: () => void,
}

const POPUP_WIDTH = 210


class PixelInfoPopup extends React.PureComponent<Props> {
  static defaultProps = {}

  onCopyColor = () => {
    this.props.onCopyColor(this.props.colorId)
    this.props.onClose()
  }

  render () {
    const {
      pixelPopup,
      pixelSize,
      offsetX,
      offsetY,
      onClose,
      colorId,
      canvasId,
    } = this.props

    if (!pixelPopup) {
      return null
    }

    const left = (pixelPopup.x * pixelSize) - (POPUP_WIDTH / 2) + (pixelSize / 2) - offsetX
    const top = (pixelPopup.y * pixelSize) - offsetY

    return (
      <div className="PixelInfoPopup" style={{ left, top }}>
        <Card className="PixelInfoPopup__card"
              title={'Pixel #' + pixelPopup.id}
              extra={<a onClick={onClose}><Icon type="close" style={{ fontSize: 16, color: '#222' }} /></a>}
              style={{ width: POPUP_WIDTH }}>
          <ClickableColorPreview
            colorId={colorId}
            onClick={this.onCopyColor}
          />
          <br />
          <h4>Painter:</h4>
          {
            colorId > 0
            ? <PixelInfoPopupPainter pixelId={pixelPopup.id} canvasId={canvasId}/>
            : <span>No painter yet, be the first!</span>
          }
        </Card>
      </div>
    )
  }
}

export default PixelInfoPopup
