import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './Modal.module.css';

export const BackDrop = (props) => <div className={styles.backdrop}  onClick={props.onConfirm} />

export const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>

      <div className={styles.content}>
        <p>{props.message}</p>
      </div>

      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Aceptar</Button>
      </footer>
    </Card>
  )
}

// const Modal = (props) => {
//   ReactDOM.createPortal(
//     <ModalOverlay
//       title={props.title}
//       message={props.message}
//       onConfirm={props.onConfirm}
//     />,
//     document.getElementById('modal-root')
//   )
// }
