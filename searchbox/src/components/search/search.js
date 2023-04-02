import axios from 'axios';
import { useEffect, useState} from 'react';
import styled from "styled-components";
import useDebounce from '../debounce/debounce';

function Search() {
    const [text, setText] = useState(null)
    const [searchedWords, setSearchedWords] = useState()
    const [exactWord, setExactWord] = useState()
    const debounceValue = useDebounce(text)
    const [historyArr, setHistoryArr] = useState(()=>{
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("history");
            if (saved !== null) {
                return JSON.parse(saved);
            } else {
                return [""]
            }
        }
    })

    // keypress 이벤트 변수
    const [focusIndex, setFocusIndex] = useState(-1);
    // const [hoverWord, setHoverWord] = useState(searchedWords[focusIndex])

    useEffect(()=>{
        console.log(focusIndex)
        // searchedWords && focusIndex && console.log(hoverWord)
    },[focusIndex])

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            const savedStorageWord = JSON.parse(localStorage.getItem('history'))
        savedStorageWord.unshift(text);
        JSON.stringify(savedStorageWord)
        localStorage.setItem('history', JSON.stringify(savedStorageWord))
        if(savedStorageWord.includes(text)) {
            const notSame = savedStorageWord.filter(item => item != text)
            notSame.unshift(text)
            notSame.splice(5, notSame.length)
            setHistoryArr(notSame)
            localStorage.setItem('history', JSON.stringify(notSame))
        }
    }}
    
    useEffect(() => {
        localStorage.setItem('history', JSON.stringify(historyArr))
    },[])

    const onChangeText = (e) => {
        setText(e.target.value)
    }
    
    // 관심사 분리 필요
    useEffect(()=>{
        const getData = async () => {
            try {
                const searchedData = await axios.get(`http://localhost:4000/search?key=${debounceValue}`);
                setSearchedWords(searchedData.data)
            } catch(err) {
                    setExactWord(err.response.data)
                    console.log(text)
            }}
        if (debounceValue) getData()
    },[debounceValue])


    useEffect(()=> {
        if (!text) return setSearchedWords(null)
    }, [text])


    useEffect(()=> {
        if (!text) return setExactWord(null);
        const output = searchedWords.find((item) => (
            item === text
        ))
        setExactWord(output)
        if (!output) {
            setExactWord('일치하는 연관검색어가 없습니다')
        }
    }, [searchedWords])


    const onClickSearchBtn = () => {
        const savedStorageWord = JSON.parse(localStorage.getItem('history'))
        savedStorageWord.unshift(text);
        JSON.stringify(savedStorageWord)
        localStorage.setItem('history', JSON.stringify(savedStorageWord))
        if(savedStorageWord.includes(text)) {
            const notSame = savedStorageWord.filter(item => item != text)
            notSame.unshift(text)
            notSame.splice(5, notSame.length)
            setHistoryArr(notSame)
            localStorage.setItem('history', JSON.stringify(notSame))
        }
    }

    return (
        <>
            <S.Title>검색</S.Title>
            <S.Display>
                <S.Searchbox placeholder={'검색어를 입력하세요.'} value={text} onChange={onChangeText} onKeyDown={handleEnter}/>
                <S.Button onClick={onClickSearchBtn}>검색</S.Button>
            </S.Display>
            <S.Display>
                <S.Display2>
                    <h2>연관검색어:</h2>
                    {searchedWords && searchedWords.map((item) => (
                        <ul>
                            {item.includes(text) ? (
                                <div>
                                    {item.split(text)[0]}
                                    <span style={{color: 'blue'}}>{text}</span>
                                    {item.split(text)[1]}
                                </div>
                            ) : (item)}
                        </ul>
                    ))}
                </S.Display2>
                <S.Display2>
                    <h2>검색 결과: </h2>
                    {exactWord && <h2>{exactWord}</h2>}
            </S.Display2>
            <S.Display2>
                <h2>최근 검색어: </h2>
                {historyArr && historyArr.map((item) => (
                    <S.Li>{item}</S.Li>
                ))}
            </S.Display2>
            </S.Display>
        </>
    )
}

export default Search

const Title = styled.h2`
    display: flex;
    justify-content: center;
    margin: 100px auto;

`
const Display = styled.div`
    display: flex;
    justify-content: center;
`

const Display2 = styled.div`
    border: solid 1px black;
    width: 300px;
    margin: 120px 30px;
    padding: 30px;
    border-radius: 10px;
`

const Searchbox = styled.input`
    display: flex;
    justify-content: center;
    margin-right: 30px;
    padding: 10px;
    font-size: 30px;
    border: solid 10px green;
    width: 600px;
`
const Button = styled.button`
    width: 100px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
`
const Li = styled.li`
    list-style: none;
`

const S = {
    Title,
    Display,
    Display2,
    Searchbox,
    Button,
    Li
}