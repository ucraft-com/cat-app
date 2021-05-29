import React from 'react';
import {useDispatch} from "react-redux";
import {getCats, getCatsByCategory, SelectCategory} from "../store/actions";

interface CategoryItemProps {
    id?: number,
    name: string
}

export default function CategoryItem(props: CategoryItemProps) {
    let {id, name} = props;
    let dispatch = useDispatch();

    function getByCategory() {
        if (id) {
            dispatch(getCatsByCategory(id))
            dispatch(SelectCategory({selectedCatId: id}))
        } else {
            dispatch(getCats())
            dispatch(SelectCategory({selectedCatId: null}))

        }
    }

    return (
        <div className='cat-item-container' onClick={getByCategory}>
            <div className='cat-title'>
                {name}
            </div>
        </div>
    )
}