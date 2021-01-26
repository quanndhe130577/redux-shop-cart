import React from "react"
import Portal from './Portal'

const Notification = ({
  children,
  autoClose = 3000,
  onClose,
}) => {
  const [isClose, setIsClose] = React.useState(false)

  React.useEffect(() => {
    const timerId = setTimeout(() => setIsClose(!isClose), autoClose)

    return () => {
      clearTimeout(timerId)
    }
  }, [autoClose, isClose])

  // const animationEnd = () => {
  //   if (isClose) onClose()
  // }

  return (
    <Portal>
        <div className={`container ${isClose ? "close" : "open"}`} 
          // onAnimationEnd={animationEnd}
        >
          <div className="container__icon">
                Icon
          </div>
          <p className="container__message">{children}</p>
          <div className="container__close" onClick={() => setIsClose(true)}>
              x
          </div>
        </div>
    </Portal>
  )
}

export default Notification