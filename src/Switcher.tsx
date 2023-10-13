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
}) => (
  <div data-component="Switcher" className={styles.switcherColor(styles[color])}>
    <label className={styles.switcherLabel}>
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        readOnly={readOnly}
        className={styles.switcherInput}
      />
      {type === 'round' ? (
        <span className={styles.roundSpan} />
      ) : (
        <span className={styles.squareSpan} />
      )}
    </label>
    &nbsp;
    <text className={styles.switcherText}>{label}</text>
  </div>
)

export default Switcher
