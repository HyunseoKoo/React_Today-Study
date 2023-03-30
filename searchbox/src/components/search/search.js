import axios from 'axios';
import { useEffect, useRef, useState} from 'react';

function Search() {

    const [text, setText] = useState(null)
    const [searchedWords, setSearchedWords] = useState()
    const [exactWord, setExactWord] = useState()
    const localStorageArr = useRef([])
    const [historyArr, setHistoryArr] = useState([])


    const onChangeText = (e) => {
        setText(e.target.value)
    }
    
    const getData = async () => {
        const searchedData =await axios.get(`http://localhost:4000/search?key=${text}`);
        return setSearchedWords(searchedData.data)
    }

    useEffect(()=> {
        console.log(text); // 확인용
        getData()
        // if (!text) {
        //     setSearchedWords(null)
        // }
    }, [text])

    /// 문제덩어리 - '노트북' 치면 노트북거치대와 같이 노트북이 포함된 단어가 연관검색어에서 안보임
    // useEffect(() => {
    //         if(!exactWord) return
    //     if(exactWord) {
    //         setSearchedWords(null)
    //     }
    // }, [exactWord])

    useEffect(()=> {
        if (!searchedWords) return;
        else {
            const output = searchedWords.find((item) => (
                item === text
            ))
            setExactWord(output)
        }

        const output = searchedWords.find((item) => (
            item === text
        ));
        if (!output) {
            setExactWord('검색 결과가 없습니다')
        }
        if (!text) {
            setExactWord(null)
        }
    }, [searchedWords]) //


    const onClickSearchBtn = () => {
        const output = searchedWords.find((item) => (
            item === text
        ));
        localStorage.setItem('history', output)
        const savedWord = localStorage.getItem('history')
        localStorageArr.current.unshift(savedWord)
        console.log(localStorageArr.current) // 확인용
    }

    useEffect(() => {
        const fiveWordsArr = localStorageArr.current.slice(0, 5)
        setHistoryArr(fiveWordsArr);
    },[historyArr])

    return (
        <>
            <div>검색어를 입력하세요</div>
            <input value={text} onChange={onChangeText}/>
            <button onClick={() => onClickSearchBtn}>검색</button>
            <h2>연관검색어:</h2>
            { searchedWords && searchedWords.map((item) => (
                    <div>{item}</div>
                )
            )}
            <h2>검색 결과: </h2>
            {exactWord && <div>{exactWord}</div>}
            <h2>최근 검색어: </h2>
            {historyArr && historyArr.map((item) => (
                <div>{item}</div>
            ))}
        </>
    )
}

export default Search