// @flow
import React, {useEffect, useState} from 'react'

import {
    Wrapper,
    Wrapper2,
    Wrapper3, 
    OuterContainer,
    InnerContainer, 
    BannerSpan, 
    MarketInput,
    TableContainer,
    TableHeadersContainer,
    TableHeadersImg,
    TableHeadersSpan,
    TableHeadersText,
    TableHeadersDiv,
    TableHeadersContainer2,
    MarketText,
    MarketText2,
    SortText,
} from './table.styled'
import { createGlobalStyle } from 'styled-components'
import axios from 'axios'

const GlobalStyle = createGlobalStyle`
    body {
        background: rgb(249, 249, 249);
    }
`


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Table = () => {
    
    const [product, setProduct] = useState([])
    const [filtered, setFiltered] = useState([])
    const [value, setValue] = useState('')
    const [sorted, setSorted] = useState('')
    const [clicked, setClicked] = useState(false)
    const [order, setOrder] = useState(false)

    const handleChange = (e) =>{
        setValue(e)
    }

    const handleSort = (e) =>{
        setSorted(e)
        setOrder(!order)
    }

   
    useEffect(() => {
        axios.get('https://api.pro.coinbase.com/bootstrap')
    .then((res) =>{
        setProduct(res.data.products)
        setFiltered(res.data.products)
    })  
    }, [])

    let sortingFunction = (array, sorted) =>{
        
        array.sort((a, b) => {
            const x = a[sorted]
            const y = b[sorted]
            return(order? y - x : x - y)
        })
    }
    

    useEffect(() => {
        setFiltered(product.filter(word => word.id.includes(value.toUpperCase())))
    },[value, product])

    useEffect(() => {
   
        if(sorted.length>1){
            let arr = filtered
            sortingFunction(arr, sorted)
            setFiltered(arr)
            setClicked(!clicked)
        }

    },[sorted, filtered, order])

    return (
            <Wrapper>
                <GlobalStyle/>
                <Wrapper2>
                    <Wrapper3>
                            <OuterContainer>
                        <InnerContainer>
                            <BannerSpan>
                                Market Information
                            </BannerSpan>
                            <MarketInput
                            placeholder='Filter Markets'
                            font-size='smaller'
                            onChange={(e) => handleChange(e.target.value)}
                            
                            />
                            
                            <TableContainer>
                                <TableHeadersContainer>
                                    
                                    <TableHeadersImg>
                                        <TableHeadersSpan>

                                        </TableHeadersSpan>
                                    </TableHeadersImg>

                            
                                    <TableHeadersDiv>
                                        <TableHeadersText>
                                            Market
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText>
                                            Base
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText>
                                            Quote
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv
                                    style={{cursor:'pointer'}}
                                    onClick={(e) => handleSort('base_min_size')}>
                                        <TableHeadersText>
                                            BASE ORDER MIN
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv
                                    style={{cursor:'pointer'}}
                                    onClick={(e) => handleSort('base_max_size')}>
                                        <TableHeadersText>
                                            BASE ORDER MAX
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv
                                    style={{cursor:'pointer'}}
                                    onClick={(e) => handleSort('min_market_funds')}>
                                        <TableHeadersText>
                                            QUOTE ORDER MIN
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv
                                    style={{cursor:'pointer'}}
                                    onClick={(e) => handleSort('max_market_funds')}>
                                        <TableHeadersText>
                                            QUOTE ORDER MAX
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv
                                    style={{cursor:'pointer'}}
                                    onClick={(e) => handleSort('base_increment')}>
                                        <TableHeadersText>
                                            BASE TICK SIZE
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv
                                    style={{cursor:'pointer'}}
                                    onClick={(e) => handleSort('quote_increment')}>
                                        <TableHeadersText>
                                            QUOTE TICK SIZE
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv 
                                    style={{cursor:'pointer'}}
                                    onClick={(e) => handleSort('limit_only')}>
                                        <TableHeadersText>
                                            STATUS
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                </TableHeadersContainer>

                                {filtered.map((array) =>{
                                    
                                    return(
                                        <TableHeadersContainer key={array.id}>
                                    <TableHeadersImg>
                                        <TableHeadersSpan>

                                        </TableHeadersSpan>
                                    </TableHeadersImg>

                                    <TableHeadersDiv>
                                        <MarketText href={`https://pro.coinbase.com/trade/${array.id}`} target="_blank">
                                            {array.id}
                                        </MarketText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <MarketText2>
                                            {array.base_currency}
                                        </MarketText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <MarketText2>
                                            {array.quote_currency}
                                        </MarketText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <MarketText2>
                                            {(parseFloat(array.base_min_size) >= 1? parseFloat(array.base_min_size): parseFloat(array.base_min_size).toFixed(3))}
                                        </MarketText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <MarketText2>
                                            {numberWithCommas(parseInt(array.base_max_size))}
                                        </MarketText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <MarketText2>
                                            {array.min_market_funds}
                                        </MarketText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <MarketText2>
                                            {numberWithCommas(parseInt(array.max_market_funds))}
                                        </MarketText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <MarketText2>
                                            {(parseFloat(array.base_increment) === 1E-8 ? parseFloat(array.base_increment).toFixed(8) : parseFloat(array.base_increment))}
                                        </MarketText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <MarketText2>
                                            {(parseFloat(array.quote_increment) === 1E-8 ? parseFloat(array.quote_increment).toFixed(8) : parseFloat(array.quote_increment))}
                                        </MarketText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <MarketText2>
                                            {array.limit_only? "Limit Only":"Full Trading"}
                                        </MarketText2>
                                    </TableHeadersDiv>
                                </TableHeadersContainer>
                                    )
                                })}
                                    

                                <TableHeadersContainer2>
                                    <TableHeadersImg>
                                        <TableHeadersSpan>
                                            
                                        </TableHeadersSpan>
                                    </TableHeadersImg>

                                    <TableHeadersDiv style={{width: "100px"}}>
                                        <TableHeadersText >
                                            MARKET/ STATUS
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText>
                                            <SortText
                                        onClick={(e) => handleSort('base_min_size')}>BASE ORDER MIN/</SortText>
                                            <SortText
                                        onClick={(e) => handleSort('base_max_size')}>MAX</SortText>
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText>
                                            <SortText
                                        onClick={(e) => handleSort('min_market_funds')}>QUOTE ORDER MIN/</SortText>
                                            <SortText
                                        onClick={(e) => handleSort('max_market_funds')}>MAX</SortText>
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText style={{whiteSpace: 'normal'}}
                                        style={{cursor:'pointer'}}
                                        onClick={(e) => handleSort('quote_increment')}>
                                            QUOTE TICK SIZE
                                        </TableHeadersText>
                                    </TableHeadersDiv>

                                </TableHeadersContainer2>
                                {filtered.map((array) =>{
                                    return(
                                        <TableHeadersContainer2 key={array.id}>
                                            <TableHeadersImg>
                                                <TableHeadersSpan>

                                                </TableHeadersSpan>
                                            </TableHeadersImg>

                                            <TableHeadersDiv style={{width: "100px"}}>
                                                <MarketText  href={`https://pro.coinbase.com/trade/${array.id}`} target="_blank">
                                                    {array.id}
                                                    <div style={{fontWeight:'normal'}}>
                                                    {array.limit_only? "Limit Only":"Full Trading"}
                                                    </div>        
                                                </MarketText>
                                            </TableHeadersDiv>
                                            <TableHeadersDiv>
                                                <MarketText2>
                                                    {(parseFloat(array.base_min_size) >= 1? parseFloat(array.base_min_size): parseFloat(array.base_min_size).toFixed(3))}
                                                    <div>
                                                    {numberWithCommas(parseInt(array.base_max_size))}
                                                    </div>
                                                </MarketText2>
                                            </TableHeadersDiv>
                                            <TableHeadersDiv>
                                                <MarketText2>
                                                    {array.min_market_funds}
                                                    <div>
                                                    {numberWithCommas(parseInt(array.max_market_funds))}
                                                    </div>
                                                </MarketText2>
                                            </TableHeadersDiv>
                                            <TableHeadersDiv>
                                                <MarketText2>
                                                    {(parseFloat(array.quote_increment) === 1E-8 ? parseFloat(array.quote_increment).toFixed(8) : parseFloat(array.quote_increment))}
                                                </MarketText2>
                                            </TableHeadersDiv>
                                        </TableHeadersContainer2>
                                    )
                                })}
                            </TableContainer>
                        </InnerContainer>
                    </OuterContainer>
                    </Wrapper3>
                </Wrapper2>
            </Wrapper>
       
    )
}
export default Table