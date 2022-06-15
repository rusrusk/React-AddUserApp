import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}></div>
  )
}

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
    </Card>
  )
}

const backdropHandler = document.getElementById('backdrop-root')
const overlayHandler = document.getElementById('overlay-root')
const ErrorModel = (props) => {
  return (
   <Fragment>
     {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, backdropHandler)}
     {ReactDOM.createPortal(<Overlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, overlayHandler)}
   </Fragment>
  )
}


export default ErrorModel