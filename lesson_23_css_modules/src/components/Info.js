import './Info.css'
//Import styles by module.css
import styles from './Info.module.css'

console.log(styles);

function Info() {
    //styles.info from Info.module.css
    return (
        <div className={styles.info}>
            <h1>Hello from info</h1>
            <button className="my-button">Click me</button>
        </div>
    )
}

export default Info;