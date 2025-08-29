import React from 'react';
import styles from './BlogFilter.module.scss';
import {categories} from '../dummy-data/dummy-post.js';
import {useSearchParams} from 'react-router-dom';

const BlogFilter = () => {

    // 쿼리 스트링 생성 기능
    const [seartchParams, setSearchParams] = useSearchParams();

    // 카테고리 옵션 선택 이벤트
    const handleCategoryChange = (e) => {
        // console.log('카테고리가 선택됨 : ', e.target.value);
        // 쿼리스트링으로 ?category=xxx
        setSearchParams(prev =>{
            console.log(`prev: `, prev);
            prev.set('category', e.target.value);
            return prev;
        });
    }

    return (
        <div className={styles.filter}>
            <select onChange={handleCategoryChange} value={seartchParams.get('category') || 'all'}>
                {categories.map(category =>
                    (<option key={category.id} value={category.id}>{category.name}</option>))}
            </select>

            <select>
                <option value='latest'>최신순</option>
                <option value='oldest'>오래된순</option>
            </select>

            <input
                type='text'
                placeholder='검색어를 입력하세요'
            />
        </div>
    );
};

export default BlogFilter;