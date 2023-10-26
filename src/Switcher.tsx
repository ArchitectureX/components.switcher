import { ChangeEvent, FC, useState } from 'react'
import { styles } from './styles'

type Props = {
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'dark' | 'light'
  label: string
  type?: string
  readOnly?: boolean
  onChange?(e: ChangeEvent<HTMLInputElement>): void
  checked?: boolean
}

const Switcher: FC<Props> = ({
  color = 'primary',
  type = 'round',
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
    type === 'round' ? 'rounded-3x1 rounded-full' : '',
    isChecked ? 'translate-x-8' : 'translate-x-1'
  ].join(' ')

  const spanStyles =
    type === 'round'
      ? [styles.roundSwitchStyles, isChecked ? styles[color] : 'bg-gray-500'].join(' ')
      : [styles.squareSwitchStyles, isChecked ? styles[color] : 'bg-gray-500'].join(' ')

  return (
    <div data-component="Switcher" className={styles.switcherContainer}>
      <label className={styles.switcherLabel}>
        <input
          type="checkbox"
          onChange={handleChecked}
          checked={isChecked}
          className={styles.switcherInput}
        />
        <span className={sliderStyles} />
        <span className={spanStyles} />
      </label>
    </div>
  )
}

export default Switcher
