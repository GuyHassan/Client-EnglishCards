import { useState, useCallback, useEffect } from 'react';
import { server } from '../Utils';

export const useFetchWords = () => {
    const [getWords, setWords] = useState([]);
    const [getWordslearned, setWordslearned] = useState([]);

    const allWords = useCallback(async _ => {
        const { words, wordsLearned } = (await server.get(`/getWords/${'guyhassan'}`)).data;
        setWords(words);
        setWordslearned(wordsLearned);
    }, [])

    useEffect(() => {
        allWords();
    }, [])

    return { getWords, setWords, getWordslearned };
}
