import { type PropsWithChildren } from 'react'

type AlertType = 'Info' | 'Warning' | 'Error' | 'Success'

interface Props extends PropsWithChildren {
  type: AlertType
  'data-testid': string
}

const ALERT_CLASSES: Record<AlertType, string> = {
  Info: 'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400',
  Error: 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400',
  Success: 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400',
  Warning: 'text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300'
}
export default function Alert ({ type, children, ...others }: Props): JSX.Element {
  return (
    <div className={`p-4 mb-4 text-sm rounded-lg ${ALERT_CLASSES[type]}`} role="alert" {...others}>
      {children}
    </div>
  )
}
