import cx from '@architecturex/utils.cx'

export const styles = {
  paginationList: 'flex items-center justify-center mt-4',
  li: 'm-1',
  switcherColor: ' inline-block text-4xl my-7 ',
  switcherLabel: 'relative inline-block w-16 h-8 ',
  switcherText: ' px-4 text-base text-gray-700 ',
  switcherInput: (color: string) =>
    ` ${color} opacity-0 w-0 h-0 checked:bg-green-600 focus:shadow checked:translate-x-6 `,
  roundSpan: ' rounded-3xl before: rounded-xl ',
  squareSpan:
    "absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-500 duration-300 before:absolute before:content-[''] before:h-6 before:w-6 before:left-1 before:bottom-1 before:bg-white before:duration-300 ",
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
  danger: 'bg-red-500',
  warning: 'bg-yellow-500',
  success: 'bg-green-500',
  info: 'bg-blue-600',
  dark: 'bg-gray-800',
  light: 'bg-gray-300'
}

export const tailwindClasses = cx.extract(styles)
