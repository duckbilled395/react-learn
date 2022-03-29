import profilePageReducer, {addPostActionCreator, deletePost} from "./profile-page-reducer";

let state = {
    postsData: [
        {id: 2, message: 'Hi, how are you?', likesCount: 12},
        {id: 1, message: 'It\'s my first post', likesCount: 125},
        {id: 3, message: 'Yo', likesCount: 11},
        {id: 4, message: 'Yo', likesCount: 16},
        {id: 5, message: 'Yo', likesCount: 12},
        {id: 6, message: 'Yo', likesCount: 1}
    ]
}

test('length of postsData should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com')
    // 2. action
    let newState = profilePageReducer(state, action)
    // 3. expectation
    expect (newState.postsData.length).toBe(7);
});
test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com')
    // 2. action
    let newState = profilePageReducer(state, action)
    // 3. expectation
    expect (newState.postsData[6].message).toBe('it-kamasutra.com');
});
test('after deleting length of postsData should be decremented', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profilePageReducer(state, action)
    // 3. expectation
    expect (newState.postsData.length).toBe(5);
});
test('after deleting length of postsData shouldnt be decremented' +
    'if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000)
    // 2. action
    let newState = profilePageReducer(state, action)
    // 3. expectation
    expect (newState.postsData.length).toBe(6);
});
