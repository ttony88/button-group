import styles from './Buttons.module.scss'

const Buttons = (props) => {

    const{content, activateButtonGroup} = props

    return(
        <div className={styles.buttonGroup}>
            {content.map(item => {
                return (
                    <button className={item.activeButton ? styles.activeButton : styles.button}
                            onClick={() => {activateButtonGroup(item.groupName)}}
                            style={{backgroundImage: `url(${item.image})`}}
                            key={item.id}>
                    </button>
                )
            })}
        </div>
    )
}
export default Buttons