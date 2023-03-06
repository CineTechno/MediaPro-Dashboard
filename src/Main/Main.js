import classes from './Main.module.css'
const Main = (props) => {
    return <div className={classes['main-layout']}>{props.children}</div>
}

export default Main