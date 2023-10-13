import React, { ChangeEvent, FC, useState } from 'react'

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
  const inputClasses = [styles.switcherInput, !isChecked ? 'translate-x-10' : ''].join(' ')

  const handleChecked = (e: any) => {
    setIsChecked(!isChecked)
    onChange(e)
  }
  const spanClasses =
    type === 'round'
      ? isChecked
        ? styles.roundSpan(styles[color])
        : styles.roundSpanBefore(styles[color])
      : isChecked
      ? styles.squareSpan(styles[color])
      : styles.squareSpanBefore(styles[color])
  return (
    <div data-component="Switcher" className={styles.switcherMain}>
      <label className={styles.switcherLabel}>
        <input
          type="checkbox"
          onChange={handleChecked}
          checked={isChecked}
          className={inputClasses}
        />
        <span className={spanClasses} />
      </label>
      &nbsp;
      <span className={styles.switcherText}>{label}</span>
    </div>
  )
}

export default Switcher
