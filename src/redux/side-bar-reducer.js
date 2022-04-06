let initialState = {
    friendList: [
        {id: 1, name: 'Victor', avatar: 'https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg'},
        {id: 2, name: 'Sveta', avatar: 'https://miro.medium.com/max/3150/1*C-34yLiaL1xakwUHROTWwQ.png'},
        {id: 3, name: 'Vanya', avatar: 'https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg'},
        {id: 4, name: 'Andrey', avatar: 'https://cdn2.unrealengine.com/18br-headband-cosmetics-naruto-toast-400x400-5228564ee685.jpg'},
        {id: 5, name: 'Vika', avatar: 'https://a.d-cd.net/2bd7a44s-960.jpg'},
        {id: 6, name: 'Roma', avatar: 'https://zvukogram.com/upload/cimg-1-1605564625.jpg'}
    ]
}

const sideBarReducer = (state = initialState, action) => {
    return state;
}

export default sideBarReducer;