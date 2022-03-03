const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let store = {
  _state: {
    profilePage: {
      postsData: [
          {id: 2, message: 'Hi, how are you?', likesCount: 12},
          {id: 1, message: 'It\'s my first post', likesCount: 125},
          {id: 3, message: 'Yo', likesCount: 11},
          {id: 4, message: 'Yo', likesCount: 16},
          {id: 5, message: 'Yo', likesCount: 12},
          {id: 6, message: 'Yo', likesCount: 1}
      ],
      newPostText: 'it-kamasutra'
    },
    messagesPage: {
      messagesData: [
          {id: 2, message: 'Hi'},
          {id: 1, message: 'How are you?'},
          {id: 3, message: 'YoYO'},
          {id: 4, message: 'YoYO'},
          {id: 5, message: 'Yo'},
          {id: 6, message: 'Yo'}
      ],
      newMessageText: 'Hi',
      dialogsData: [
        {id: 1, name: 'Victor', avatar: 'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'},
        {id: 2, name: 'Sveta', avatar: 'https://miro.medium.com/max/3150/1*C-34yLiaL1xakwUHROTWwQ.png'},
        {id: 3, name: 'Vanya', avatar: 'https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg'},
        {id: 4, name: 'Andrey', avatar: 'https://cdn2.unrealengine.com/18br-headband-cosmetics-naruto-toast-400x400-5228564ee685.jpg'},
        {id: 5, name: 'Vika', avatar: 'https://a.d-cd.net/2bd7a44s-960.jpg'},
        {id: 6, name: 'Roma', avatar: 'https://zvukogram.com/upload/cimg-1-1605564625.jpg'}
      ]
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
      // console.log(this._state)
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer pattern / addEventListner, onClick, onChange
  },

    dispatch(action) {  // {type: 'ADD-POST"}
        if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.profilePage.postsData.length + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: this._state.messagesPage.messagesData.length + 1,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
  }
};

export const addPostActionCreator = () => ({
      type: ADD_POST
});

export const updateNewPostActionCreator = (text) => ({
      type: UPDATE_NEW_POST_TEXT, newText: text
});

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
});

export default store;
window.store = store;

















// sideBar: {
//   friendsList: [
//     {id: 1, name: 'Victor', avatar: 'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'},
//     {id: 2, name: 'Sveta', avatar: 'https://miro.medium.com/max/3150/1*C-34yLiaL1xakwUHROTWwQ.png'},
//     {id: 3, name: 'Vanya', avatar: 'https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg'},
//     {id: 4, name: 'Andrey', avatar: 'https://cdn2.unrealengine.com/18br-headband-cosmetics-naruto-toast-400x400-5228564ee685.jpg'},
//     {id: 5, name: 'Vika', avatar: 'https://a.d-cd.net/2bd7a44s-960.jpg'},
//     {id: 6, name: 'Roma', avatar: 'https://zvukogram.com/upload/cimg-1-1605564625.jpg'}
//   ]
// }