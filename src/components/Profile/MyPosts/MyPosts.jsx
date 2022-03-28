import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {Form, Formik} from "formik";
import {PostTextField} from "./Post/PostTextField";

const MyPosts = (props) => {
// debugger;
    let postsElements = props.posts
        .map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>);

    let onAddPost = (post) => {
        props.addPost(post);
    }

    return (
        <Formik initialValues={{
            post: ''
        }}
                onSubmit={(values, {resetForm}) => {
                    // console.log('values: ', values.post)
                    onAddPost(values.post)
                    resetForm();
                }}
        >
            {(formik) => (
                <Form className={styles.postsBlock}>
                    <div>
                        <PostTextField name='post' type='text' />
                        <div>
                            <button type='submit'>Add post</button>
                        </div>
                    </div>
                    <div className={styles.posts}>
                        {postsElements}
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default MyPosts;