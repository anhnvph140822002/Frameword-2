import styles from './index.module.css'

const Square = (props) => {
  // Lift up state here
  return <button className={styles.square} onClick={props.handlePlay}>{props.value}</button>
}

export default Square;
