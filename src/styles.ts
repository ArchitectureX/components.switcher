import cx from '@architecturex/utils.cx'

interface StylesMapping {
  [key: string]: string
}

export const styles: StylesMapping = {
  switcherContainer: 'relative inline-block w-auto h-9',
  switcherLabel: 'relative inline-block w-16 h-6',
  switcherText: 'px-4 text-base text-gray-700',
  switcherInput: 'hidden w-0 h-0',
  switcherSlider:
    "absolute cursor-pointer top-1 left-0 right-0 bottom-0 bg-gray-500 duration-300before:absolute before::content-[''] before:h-7 before:w-7 before:left-1 before:bottom-1 before:bg-white before:duration-300",
  roundSwitchStyles: 'cursor-pointer block w-13 h-8 rounded-2xl',
  squareSwitchStyles: 'cursor-pointer block w-13 h-8',
  sliderStyle: 'absolute cursor-pointer block w-6 h-6 bg-white shadow transform transition ease-in',
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
  danger: 'bg-red-500',
  warning: 'bg-yellow-500',
  success: 'bg-green-500',
  info: 'bg-blue-600',
  dark: 'bg-gray-800',
  light: 'bg-gray-300',
  extra: 'translate-x-8 translate-x-1'
}

export const tailwindClasses = cx.extract(styles)
