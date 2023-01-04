import mailImg from '../img/mail.png'
import addingBlackSquareImg from '../img/adding-black-square.png'
import facebookImg from '../img/facebook.png'
import forwardRightArrowImg from '../img/forward-right-arrow.png'
import frameSquareImg from '../img/frame-square.png'
import homeImg from '../img/home.png'
import infoImg from '../img/info.png'
import keyboardLeftArrowImg from '../img/keyboard-left-arrow.png'
import keyboardRightArrowImg from '../img/keyboard-right-arrow.png'
import loginSquareArrowImg from '../img/login-square-arrow.png'
import menuButtonImg from '../img/menu-button.png'
import newEmailImg from '../img/new-email.png'
import notificationsBellImg from '../img/notifications-bell.png'
import onOffPowerImg from '../img/on-off-power.png'
import photoCameraImg from '../img/photo-camera.png'
import recyclebinImg from '../img/recyclebin.png'
import roundAccountImg from '../img/round-account.png'
import showMoreImg from '../img/show-more.png'
import twitterImg from '../img/twitter.png'
import youtubeImg from '../img/youtube.png'

const Activate_Button_Group = 'buttons/Activate_Button_Group'

let initialState = {
    content: [
        {
            id: 1,
            groupName: 'groupA',
            activeButton: false,
            image: recyclebinImg,
        },
        {
            id: 2,
            groupName: 'groupA',
            activeButton: false,
            image: addingBlackSquareImg,
        },
        {
            id: 3,
            groupName: 'groupA',
            activeButton: false,
            image: showMoreImg,
        }, 
        {
            id: 4,
            groupName: 'groupA',
            activeButton: false,
            image: forwardRightArrowImg,
        },
        {
            id: 5,
            groupName: 'groupA',
            activeButton: false,
            image: frameSquareImg,
        },
        {
            id: 6,
            groupName: 'groupB',
            activeButton: false,
            image: homeImg,
        },
        {
            id: 7,
            groupName: 'groupB',
            activeButton: false,
            image: infoImg,
        },
        {
            id: 8,
            groupName: 'groupB',
            activeButton: false,
            image: keyboardLeftArrowImg,
        },
        {
            id: 9,
            groupName: 'groupB',
            activeButton: false,
            image: keyboardRightArrowImg,
        },
        {
            id: 10,
            groupName: 'groupB',
            activeButton: false,
            image: loginSquareArrowImg,
        },
        {
            id: 11,
            groupName: 'groupC',
            activeButton: false, 
            image: menuButtonImg,
        },
        {
            id: 12,
            groupName: 'groupC',
            activeButton: false,
            image: newEmailImg,
        },
        {
            id: 13,
            groupName: 'groupC',
            activeButton: false,
            image: notificationsBellImg, 
        },
        {
            id: 14,
            groupName: 'groupC',
            activeButton: false,
            image: onOffPowerImg,
        },
        {
            id: 15,
            groupName: 'groupC',
            activeButton: false,
            image: photoCameraImg, 
        },
        {
            id: 16,
            groupName: 'groupD',
            activeButton: false, 
            image: mailImg,
        },
        {
            id: 17,
            groupName: 'groupD',
            activeButton: false,
            image: roundAccountImg, 
        },
        {
            id: 18,
            groupName: 'groupD',
            activeButton: false,
            image: facebookImg,
        },
        {
            id: 19,
            groupName: 'groupD',
            activeButton: false,
            image: twitterImg,
        },
        {
            id: 20,
            groupName: 'groupD',
            activeButton: false,
            image: youtubeImg,
        },
    ]
}

let buttonsReducer = (state=initialState, action) => {
    switch (action.type) {
        case Activate_Button_Group:
            return {
                ...state,
                content: [...state.content.map(button => {
                    if (button.groupName === action.groupName) {
                        return {
                            ...button,
                            activeButton: true
                        }
                    }
                    return {
                        ...button,
                        activeButton: false
                    }

                })]
            }
    
        default:
            return state
    }
}
export default buttonsReducer

export let activateButtonGroup = (groupName) => ({type: Activate_Button_Group, groupName})