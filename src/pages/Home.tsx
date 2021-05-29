import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CatItem from "../components/CatItem";
import {updateCats, updateCatsByCategory} from "../store/actions";
import '../styles/main.scss'
import {getCatsSelector, getSelectedCatId} from "../store/selectors";

export function Home() {

    let cats = useSelector(getCatsSelector);
    let selectedCatId = useSelector(getSelectedCatId);
    let dispatch = useDispatch();
    let [page, setPage] = useState(1);

    function loadMore() {
        page++
        if(selectedCatId) {
            dispatch(updateCatsByCategory(selectedCatId, page))
        }else {
            dispatch(updateCats(page));
        }
        setPage(page)
    }

    useEffect(()=>{
        setPage(1)
    }, [selectedCatId])

    return (
        <div className="main-container">
            <div className='cats-container'>
                {cats && cats.map((cat)=>{
                    return <CatItem key={`cat${cat.id}`} url={cat.url}/>
                })}
            </div>
            <div className='load-more-container'>
                <div className='load-more' onClick={loadMore}>
                    Load More
                </div>
            </div>
        </div>
    )
}

