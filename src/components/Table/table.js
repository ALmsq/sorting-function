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
    TableHeadersText2
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

    const [products, setProducts] = useState([])
    // let products = []
    useEffect(() => {
        axios.get('https://api.pro.coinbase.com/bootstrap')
    .then((res) =>{
        // products.push(res.data.products)
        // console.log(res.data.products)
        setProducts(res.data.products)
    })
    }, [])
    return (

            <Wrapper>
                {console.log(products)}
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
                                    <TableHeadersDiv>
                                        <TableHeadersText>
                                            BASE ORDER MIN
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText>
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

                                {products.map((array) =>{
                                    
                                    return(
                                        <TableHeadersContainer>
                                    
                                    <TableHeadersImg>
                                        <TableHeadersSpan>

                                        </TableHeadersSpan>
                                    </TableHeadersImg>

                                    <TableHeadersDiv>
                                        <TableHeadersText>
                                            {array.id}
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText2>
                                            {array.base_currency}
                                        </TableHeadersText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText2>
                                            {array.quote_currency}
                                        </TableHeadersText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText2>
                                            {(parseFloat(array.base_min_size) >= 1? parseFloat(array.base_min_size): parseFloat(array.base_min_size).toFixed(3))}
                                        </TableHeadersText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText2>
                                            {numberWithCommas(parseInt(array.base_max_size))}
                                        </TableHeadersText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText2>
                                            {array.min_market_funds}
                                        </TableHeadersText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText2>
                                            {numberWithCommas(parseInt(array.max_market_funds))}
                                        </TableHeadersText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText2>
                                            {array.base_increment}
                                        </TableHeadersText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText2>
                                        
                                            {(parseFloat(array.quote_increment) >= 1? parseFloat(array.quote_increment): parseFloat(array.quote_increment).toFixed(3))}
                                        </TableHeadersText2>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv>
                                        <TableHeadersText2>
                                            {array.limit_only? "Limit Only":"Full Trading"}
                                        </TableHeadersText2>
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
                                            MARKET/STATUS
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv className='div2'>
                                        <TableHeadersText className='span2'>
                                            BASE ORDER MIN/MAX
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv className='div2'>
                                        <TableHeadersText className='span2'>
                                            QUOTE ORDER MIN/MAX
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                    <TableHeadersDiv className='div2'>
                                        <TableHeadersText className='span2'>
                                            QUOTE TICK SIZE
                                        </TableHeadersText>
                                    </TableHeadersDiv>
                                </TableHeadersContainer2>
                                <TableHeadersContainer2>
                                <TableHeadersImg>
                                        <TableHeadersSpan>

                                        </TableHeadersSpan>
                                    </TableHeadersImg>
                                </TableHeadersContainer2>
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