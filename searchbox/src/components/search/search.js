import axios from 'axios';
import { useEffect, useState} from 'react';
import styled from "styled-components";
import SearchApi from '../../api/searchApi';
import useDebounce from '../debounce/debounce';

let getHistory = JSON.parse(localStorage.getItem('history'))

function Search() {
    const [text, setText] = useState()
    const [searchedWords, setSearchedWords] = useState()
    const [exactWord, setExactWord] = useState()
    const [historyArr, setHistoryArr] = useState()
    const [focusIndex, setFocusIndex] = useState(-1)
    const debounceValue = useDebounce(text)
    
    useEffect(()=>{
        if(!localStorage.getItem('history')) {
            localStorage.setItem('history', JSON.stringify([]))
        } else {
            setHistoryArr(getHistory)
        }
    },[])

    const onChangeText = (e) => {
        setText(e.target.value)
    }
    
    // 관심사 분리 필요
    useEffect(()=>{
        if (!text) return
        const getData = async () => {
            try {
                const searchedData = await SearchApi.getSearchData(debounceValue)
                setSearchedWords(searchedData.data)
            } catch(err) {
                    setExactWord(err.response.data)
            }}
        getData()
    }, [debounceValue])


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
        if(text.trim().length === 0) return;
        getHistory.unshift(text)
        const set = JSON.stringify(getHistory)
        localStorage.setItem('history', set)
        if(getHistory.includes(text)) {
            const notSame = getHistory.filter(item => item !== text)
            notSame.unshift(text)
            notSame.splice(5, notSame.length)
            setHistoryArr(notSame)
            localStorage.setItem('history', JSON.stringify(notSame))
        }
    }

    const keyHandle = (e) => {
        if(e.key === "Enter") {
            getHistory.unshift(text);
            const set = JSON.stringify(getHistory)
            localStorage.setItem('history', set)
            if(getHistory.includes(text)) {
                const notSame = getHistory.filter(item => item !== text)
                notSame.unshift(text)
                notSame.splice(5, notSame.length)
                setHistoryArr(notSame)
                localStorage.setItem('history', JSON.stringify(notSame))
                }
        }

        else if(e.key === "ArrowDown") {
            if(focusIndex < searchedWords.length-1){
                setFocusIndex(prev => prev+1)
            }else {
                setFocusIndex(0);
            }
        }

        else if(e.key === "ArrowUp") {
            if(focusIndex === 0) {
                setFocusIndex(searchedWords.length-1)
            } else {setFocusIndex(prev => prev-1)}
            }
        }

    return (
        <>
            <S.Title>검색</S.Title>
            <S.Display>
                <S.Searchbox placeholder={'검색어를 입력하세요.'} value={text} onChange={onChangeText} onKeyDown={keyHandle}/>
                <S.Button onClick={onClickSearchBtn}>검색</S.Button>
            </S.Display>
            <S.Display>
                <S.Display2>
                    <h2>연관검색어:</h2>
                    {searchedWords && searchedWords.map((item, idx) => (
                        <S.List key={idx} focus={idx === focusIndex}>
                            {item.includes(text) ? (
                                <div>
                                    {item.split(text)[0]}
                                    <span value={text} style={{color: 'blue'}}>{text}</span>
                                    {item.split(text)[1]}
                                </div>
                            ) : (item)}
                        </S.List>
                    ))}
                </S.Display2>
                <S.Display2>
                    <h2>검색 결과: </h2>
                    {exactWord && <h2>{exactWord}</h2>}
            </S.Display2>
            <S.Display2>
                <h2>최근 검색어: </h2>
                {historyArr && historyArr.map((item, idx) => (
                    <S.Li key={idx}>{item}</S.Li>
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
const Span = styled.div`
    &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
`
const List = styled.div`
    background-color: ${({ focus }) => (focus ? '#d9d9d9' : 'white')};
`

const S = {
    Title,
    Display,
    Display2,
    Searchbox,
    Button,
    Li,
    Span,
    List
}