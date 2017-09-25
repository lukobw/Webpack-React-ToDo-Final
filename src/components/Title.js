import React from 'react';
import style from './Title.css';

const Title = props => <h1 className={style.Title}>{props.title} <span>({props.taskNumber})</span></h1>

export default Title;
