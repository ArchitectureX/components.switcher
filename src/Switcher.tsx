import React, { ChangeEvent, FC } from 'react'

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
  readOnly,
  onChange = () => {},
  checked = false
}) => {
  const inputClasses = [
    styles.switcherInput,
    styles[color],
    checked ? 'bg-green-600' : '',
    checked ? 'translate-x-6' : ''
  ].join(' ')
  const spanClasses =
    type === 'round'
      ? [styles.roundSpan, checked ? 'bg-green-600' : ''].join(' ')
      : styles.squareSpan
  return (
    <div data-component="Switcher" className={styles.switcherColor}>
      <label className={styles.switcherLabel}>
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          readOnly={readOnly}
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
