import { ChangeEvent, FC, useState } from 'react'
import { styles } from './styles'

export type IProps = {
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'dark' | 'light'
  label: string
  type?: string
  readOnly?: boolean
  onChange?(e: ChangeEvent<HTMLInputElement>): void
  checked?: boolean
}

const Switcher: FC<IProps> = ({
  color = 'primary',
  label = '',
  type,
  onChange = () => {},
  checked = false
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleChecked = (e: any) => {
    setIsChecked(!isChecked)
    onChange(e)
  }

  const sliderStyles = [
    styles.switcherSlider,
    styles.sliderStyle,
    isChecked ? 'translate-x-6' : 'translate-x-0'
  ].join(' ')
  const spanStyles =
    type === 'round'
      ? [styles.roundSwitchStyles, styles[color]].join(' ')
      : [styles.squareSwitchStyles, styles[color]].join(' ')

  return (
    <div data-component="Switcher1" className={styles.switcherContainer}>
      <label className={styles.switcherLabel}>
        <input
          type={'checkbox'}
          onChange={handleChecked}
          checked={isChecked}
          className={styles.switcherInput}
        />
        <span className={sliderStyles} />
        <span className={spanStyles} />
      </label>
      &nbsp;
      <span className={styles.switcherText}>{label}</span>
    </div>
  )
}

export default Switcher
