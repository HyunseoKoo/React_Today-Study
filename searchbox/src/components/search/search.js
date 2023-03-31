import axios from 'axios';
import { useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import useDebounce from '../debounce/debounce';

function Search() {

    const [text, setText] = useState(null)
    const [searchedWords, setSearchedWords] = useState()
    const [exactWord, setExactWord] = useState()
    const localStorageArr = useRef([]) // 로컬스토리의 배열로 대체하기
    const [historyArr, setHistoryArr] = useState([])
    const savedWord = localStorage.getItem('history')

    const debounceValue = useDebounce(text)

    const onChangeText = (e) => {
        setText(e.target.value)
    }
    
    // 관심사 분리 필요
    // const getData = async () => {
    //     const searchedData = await axios.get(`http://localhost:4000/search?key=${text}`);
    //     setSearchedWords(searchedData.data)
    // }

    useEffect(()=>{
        const getData = async () => {
            const searchedData = await axios.get(`http://localhost:4000/search?key=${debounceValue}`);
            setSearchedWords(searchedData.data)
        }
        if (debounceValue) getData()
    },[debounceValue])

    useEffect(()=> {
        if (!text) return setSearchedWords(null)
        // getData()
    }, [text])


    useEffect(()=> {
        if (!text) return setExactWord(null);
        const output = searchedWords.find((item) => (
            item === text
        ))
        setExactWord(output)
        if (!output) {
            setExactWord('검색 결과가 없습니다')
        }
    }, [searchedWords]) //


    const onClickSearchBtn = () => {
        if(!searchedWords) return
        const output = searchedWords.find((item) => (
            item === text
        ));
        if(!output) return
        localStorage.setItem('history', output)
        const savedWord = localStorage.getItem('history') // 삭제 필요

        if(!localStorageArr.current.includes(savedWord)){
        localStorageArr.current.unshift(savedWord)
        }
        if(localStorageArr.current.includes(savedWord)) {
            const notSame =localStorageArr.current.filter(item => item != savedWord)
            notSame.unshift(savedWord)
            const fiveWordsArr = notSame.slice(0, 5)
            setHistoryArr(fiveWordsArr);
        }
    }

    useEffect(() => {
        if(localStorageArr.current.includes(savedWord)) {
            const notSame =localStorageArr.current.filter(item => item != savedWord)
            notSame.unshift(savedWord)
            const fiveWordsArr = notSame.slice(0, 5)
            setHistoryArr(fiveWordsArr)
        }
    },[localStorageArr.current.length])

    return (
        <>
            <S.Title>검색</S.Title>
            <S.Display>
                <S.Searchbox placeholder={'검색어를 입력하세요.'} value={text} onChange={onChangeText}/>
                <S.Button onClick={onClickSearchBtn}>검색</S.Button>
            </S.Display>
            <S.Display>
                <S.Display2>
                    <h2>연관검색어:</h2>
                    {searchedWords && searchedWords.map((item) => (
                        <ul>
                            {item.includes(text) ? (
                                <>
                                    <Li style={{color: 'blue'}}>{item.split(" ")}</Li>
                                </>
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
                {historyArr.map((item) => (
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