import React from 'react';
import style from './NewPost.module.scss'
import { reduxForm, Field } from 'redux-form';
import { addPost, toggleShowPostForm } from './../../../redux/newsReducer'
import { connect } from 'react-redux';


let PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style['theme']}>
                <label htmlFor="newPostTheme">Тема:</label>
                <Field
                    name='newPostTheme'
                    component='input'
                    type='text'
                    id='newPostTheme'
                    placeholder='Тема поста...'
                    required='required'
                />
            </div>
            <div className={style['text']}>
                <Field
                    name='newPostText'
                    component='textarea'
                    id='newPostText'
                    placeholder='Содержание поста...'
                    required='required'
                />
            </div>
            <button className={style['btn-public']}>Добавить</button>
        </form>
    )
}

const NewPostForm = reduxForm({ form: 'PostForm' })(PostForm)

const NewPost = (props) => {

    const onSubmit = (values) => {
        props.addPost(values.newPostTheme, values.newPostText);
        props.toggleShowPostForm(false)
    }

    return (
        <div className={style['item']}>
            <div className={style['body__content']}>
                <div className={style['content']}>
                    <NewPostForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );
}

export default connect(null, { addPost, toggleShowPostForm })(NewPost)
