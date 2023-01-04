import { connect } from 'react-redux';
import styles from './App.module.scss';
import { getContent } from '../../selectors'
import { activateButtonGroup } from '../../redux/buttonsReducer'
import Buttons from '../Buttons';

const App = (props) => {
    return(
        <div className={styles.wrapper}>
            <Buttons {...props} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        content: getContent(state)
    }
}

const AppContainer = connect(mapStateToProps, {activateButtonGroup})(App)

export default AppContainer;
