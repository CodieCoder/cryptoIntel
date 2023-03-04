import { ReactNode } from "react"
import { Spinner } from "react-bootstrap"

interface ILoadingButton {
  children: ReactNode
  onClick?: () => {}
  className?: string | undefined | null
  style?: any
  loading?: boolean
}

export const MyButton = ({
  children,
  onClick,
  className,
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      className={`general-submit-btn ${className && className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export const LoadingButton: React.FC<ILoadingButton> = ({
  children,
  onClick,
  className,
  loading = false,
}) => {
  return (
    <button
      className={`general-loading-submit-btn ${loading && "loading"} ${
        className && className
      } `}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <>
          <Spinner
            animation="border"
            variant="light"
            className="general-loading-submit-spin"
          />
          &nbsp; Loading
        </>
      ) : (
        children
      )}
    </button>
  )
}
