import React, { useCallback, useState } from 'react';
import Card from '../../components/Card/Card.js';
import { useFetchWords } from '../../hooks';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './style.css';
const WordCards = () => {
    const { getWords, setWords } = useFetchWords();
    const [search, setSearch] = useState('')
    const RenderWords = () => {
        return getWords.map((word, i) => {
            let [Word, translate] = word.split(' - ');
            return <Card
                key={i}
                word={Word}
                wordTranslate={
                    translate.split('').reverse().join('')}
            />
        })
    }

    const filterName = () => {
        const word = getWords.filter(x => x.includes(search))
        setWords(word)
    }

    return (
        <div className="content-cards">
            <h1>English - Hebrew Cards</h1>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} style={{ width: '250px' }} />
            <br />
            
            {/* <button onClick={filterName}>Search</button> */}
            <div className="cards">
                <div className="wrapper-card">
                    <RenderWords />
                </div>
            </div >
        </div>
    )
}
export default WordCards;