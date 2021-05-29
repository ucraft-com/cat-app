import React from 'react';
import {useSelector} from "react-redux";
import {getCategories} from "../store/selectors";
import CategoryItem from "./CategoryItem";
import '../styles/leftBar.scss'

export function LeftBar() {
    const categories = useSelector(getCategories);

    return (
        <div className='left-bar-container'>
            <CategoryItem name="Home"/>
            {categories.map((category) => {
                return <CategoryItem key={`cat${category.id}`} name={category.name} id={category.id}/>
            })}
        </div>
    )
}