import './Toast.css'

const Toast = ({ type, children }) => {
    return (
        <p className={`Toast ${type}`}>{children}</p>
    )
}

export default Toast;