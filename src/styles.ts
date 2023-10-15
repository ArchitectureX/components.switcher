import cx from '@architecturex/utils.cx'

export const styles = {
  switcherContainer: 'relative inline-block my-8 leading-9',
  switcherLabel: 'relative inline-block w-16 h-8',
  switcherText: 'px-4 text-base text-gray-700',
  switcherInput: 'hidden',
  switcherSlider: 'absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-3x1',
  roundSwitchStyles: 'cursor-pointer block h-4 rounded-full',
  squareSwitchStyles: 'cursor-pointer block h-4',
  sliderStyle:
    'absolute cursor-pointer block w-4 h-4 bg-white rounded-full shadow transform transition ease-in',
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
  danger: 'bg-red-500',
  warning: 'bg-yellow-500',
  success: 'bg-green-500',
  info: 'bg-blue-600',
  dark: 'bg-gray-800',
  light: 'bg-gray-300',
  extra: 'translate-x-6 translate-x-0'
}

export const tailwindClasses = cx.extract(styles)
