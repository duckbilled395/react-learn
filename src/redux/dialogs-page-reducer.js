const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messagesData: [
        {id: 2, message: 'Hi'},
        {id: 1, message: 'How are you?'},
        {id: 3, message: 'YoYO'},
        {id: 4, message: 'YoYO'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ],
    dialogsData: [
        {id: 1, name: 'Victor', avatar: 'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'},
        {id: 2, name: 'Sveta', avatar: 'https://miro.medium.com/max/3150/1*C-34yLiaL1xakwUHROTWwQ.png'},
        {id: 3, name: 'Vanya', avatar: 'https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg'},
        {id: 4, name: 'Andrey', avatar: 'https://cdn2.unrealengine.com/18br-headband-cosmetics-naruto-toast-400x400-5228564ee685.jpg'},
        {id: 5, name: 'Vika', avatar: 'https://a.d-cd.net/2bd7a44s-960.jpg'},
        {id: 6, name: 'Roma', avatar: 'https://zvukogram.com/upload/cimg-1-1605564625.jpg'}
    ]
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:

            let text = action.newMessage.message
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: state.messagesData.length + 1, message: text}]
            };
        default:
            return state;
    }
}

export const sendMessage = (newMessage) => ({
    type: SEND_MESSAGE,
    newMessage
});

export default dialogsPageReducer;