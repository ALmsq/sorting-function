import React from 'react'
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
    Rtable, 
    TableHeadersContainer2 
} from './table.styled'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background: rgb(249, 249, 249);
    }
`

const Table = () => {
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