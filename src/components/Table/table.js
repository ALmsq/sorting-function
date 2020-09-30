import React, {useEffect, useState, useCallback} from 'react'

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
    MarketText2
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
    const [newArr, setNewArr] = useState([])
    const [value, setValue] = useState('')
    const [sorted, setSorted] = useState('')
    const [clicked, setClicked] = useState(false)

    const handleChange = (e) =>{
        setValue(e)
    }

    const handleSort = (e) =>{
        setSorted(e)
    }
    
    // const handleSort = useCallback((e) =>{
    //     setSorted(e)
    // })

    // let products = []
    useEffect(() => {
        axios.get('https://api.pro.coinbase.com/bootstrap')
    .then((res) =>{
        setProduct(res.data.products)
        setFiltered(res.data.products)
        // console.log(res.data.products.sort((a,b) => ))
        // console.log(res.data.products.sort((a,b) => a.base_min_size - b.base_min_size))
        
    })  
    }, [])

    let sortingFunction = (array, sorted) =>{
        array.sort((a, b) => {
            return(a[sorted] - b[sorted])
        })
        // console.log(array)
    }
    

    useEffect(() => {
        setFiltered(product.filter(word => word.id.includes(value.toUpperCase())))
    },[value])

    useEffect(() => {
   
        if(sorted.length>1){
            
            let arr = filtered
            sortingFunction(arr, sorted)
            setFiltered(arr)
            setClicked(!clicked)
            console.log('clicked?',clicked)
            // console.log('yo',[...arr])
            
            // console.log('filtered: ',filtered)
            // console.log('sorted: ',sorted)
        }

    },[sorted, filtered])

    return (

            <Wrapper>
                {console.log('filtered: ',filtered)}
                {/* {console.log('sorted: ', sorted)} */}
                
                
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


                                    <TableHeadersDiv
                                    
                                    >
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
                                    onClick={(e) => handleSort('base_min_size')}
                                    >
                                        <TableHeadersText>
                                            BASE ORDER MIN
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText
                                        style={{cursor:'pointer'}}
                                        onClick={(e) => handleSort('base_max_size')}
                                        >
                                            BASE ORDER MAX
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText>
                                            QUOTE ORDER MIN
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText>
                                            QUOTE ORDER MAX
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText>
                                            BASE TICK SIZE
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText>
                                            QUOTE TICK SIZE
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText>
                                            STATUS
                                        </TableHeadersText>
                                    </TableHeadersDiv>

                                </TableHeadersContainer>

                                {filtered.map((array) =>{
                                    
                                    return(
                                        <TableHeadersContainer>
                                    
                                    <TableHeadersImg>
                                        <TableHeadersSpan>

                                        </TableHeadersSpan>
                                    </TableHeadersImg>

                                    <TableHeadersDiv>
                                        <MarketText>
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
                                            {(parseFloat(array.base_increment) == 1E-8 ? parseFloat(array.base_increment).toFixed(8) : parseFloat(array.base_increment))}
                                        </MarketText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <MarketText2>
                                        
                                            {(parseFloat(array.quote_increment) == 1E-8 ? parseFloat(array.quote_increment).toFixed(8) : parseFloat(array.quote_increment))}
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
                                        <TableHeadersText className='span2'>
                                            MARKET/ STATUS
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv className='div2'>
                                        <TableHeadersText className='span2'>
                                            BASE ORDER MIN/ MAX
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv className='div2'>
                                        <TableHeadersText className='span2'>
                                            QUOTE ORDER MIN/ MAX
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv className='div2'>
                                        <TableHeadersText className='span2' style={{whiteSpace: 'normal'}}>
                                            QUOTE TICK SIZE
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                </TableHeadersContainer2>
                                {filtered.map((array) =>{
                                    return(
                                        <TableHeadersContainer2>
                                            <TableHeadersImg>
                                                <TableHeadersSpan>

                                                </TableHeadersSpan>
                                            </TableHeadersImg>

                                            <TableHeadersDiv style={{width: "100px"}}>
                                                <MarketText>
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
                                                    {(parseFloat(array.quote_increment) == 1E-8 ? parseFloat(array.quote_increment).toFixed(8) : parseFloat(array.quote_increment))}
                                                </MarketText2>
                                            </TableHeadersDiv>
                                        </TableHeadersContainer2>
                                    )
                                })}
                            </TableContainer>
                            {/* <Rtable>
                                <thead>
                                    <tr>
                                        <th>first</th>
                                        <th>first</th>
                                        <th>first</th>
                                        <th>first</th>
                                        <th>first</th>
                                        <th>first</th>
                                    </tr>
                                </thead>
                            </Rtable> */}
                        </InnerContainer>
                    </OuterContainer>
                    </Wrapper3>
                </Wrapper2>
            </Wrapper>
       
    )
}
export default Table