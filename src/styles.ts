import cx from '@architecturex/utils.cx'

export const styles = {
  switcherMain: ' inline-block my-7 leading-9 ',
  switcherLabel: 'relative inline-block w-16 h-8 ',
  switcherText: ' px-4 text-base text-gray-700 ',
  switcherInput: 'w-0 h-0 z-0 ',
  roundSpan: (color: string) =>
    `rounded rounded-full absolute cursor-pointer top-0 left-0 right-0 bottom-0 ${color} transition duration-300 `,
  roundSpanBefore: (color: string) =>
    `rounded rounded-full absolute cursor-pointer top-0 left-0 right-0 bottom-0 ${color} transition duration-300 before:absolute before:rounded-full before:h-6 before:w-6 before:left-1 before:bottom-1 before:bg-white before:transition before:duration-300 `,
  squareSpan: (color: string) =>
    `absolute cursor-pointer top-0 left-0 right-0 bottom-0 ${color} transition duration-300  `,
  squareSpanBefore: (color: string) =>
    `absolute cursor-pointer top-0 left-0 right-0 bottom-0 ${color} transition duration-300 before:absolute before:h-6 before:w-6 before:left-1 before:bottom-1 before:bg-white before:transition before:duration-300 `,
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
  danger: 'bg-red-500',
  warning: 'bg-yellow-500',
  success: 'bg-green-500',
  info: 'bg-blue-600',
  dark: 'bg-gray-800',
  light: 'bg-gray-300',
  extra: 'translate-x-6'
}

export const tailwindClasses = cx.extract(styles)
