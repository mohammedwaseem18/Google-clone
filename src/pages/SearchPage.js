import React from 'react'
import './SearchPage.css'
import {useStateValue} from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import Response from './response'
import { Link } from "react-router-dom";
import Search from './Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { ListItem } from '@material-ui/core';



function SearchPage() {
    const [{term},dispatch]= useStateValue();
    //live api call
    const { data } = useGoogleSearch(term);

    // const data=Response;

    console.log(data)
  return (
    <div className='searchPage'>
        <div className='searchPage__header'>

            {/* <h1>{term}</h1> */}
            <Link to ="/">
                <img
                className='searchPage__logo'
                 src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt=""
              />
            </Link>

            <div className ='searchPage__headerBody'>
                <Search hideButtons/>

                <div className='searchPage__options'>
                    <div className='searchPage__optionsLeft'>

                        <div className='searchPage__option'>
                            <SearchIcon/>
                            <Link to="/all">All</Link>
                        </div>
                        <div className='searchPage__option'>
                            <DescriptionIcon/>
                            <Link to="/news">News</Link>
                        </div>
                        <div className='searchPage__option'>
                            <ImageIcon/>
                            <Link to="/images">Images</Link>
                        </div>
                        <div className='searchPage__option'>
                            <LocalOfferIcon/>
                            <Link to="/shopping">shopping</Link>
                        </div>
                        <div className='searchPage__option'>
                            <RoomIcon/>
                            <Link to="/maps">maps</Link>
                        </div>
                        <div className='searchPage__option'>
                            <MoreVertIcon/>
                            <Link to="/more">more</Link>
                        </div>
                    </div>

                    <div className='searchPage__optionsRight'>
                        <div className='searchPage__option'>
                            <Link to="/settings">settings</Link>
                        </div>
                        <div className='searchPage__option'>
                            <Link to="/tools">Tools</Link>
                        </div>

                    </div>


                </div>
            </div>



        </div>

        {term && (
             <div
             className='searchPage__results'>

                <p
                className='searchPage__resultCount'>
                   About {data?.searchInformation.formattedTotalResults}results
                   ({data?.searchInformation.formattedSearchTime}seconds)
                   for {term}


                </p>


                {data?.items.map(item => (
                    <div
                   
                     className='searchPage__resultLink'>
                        <a
                        href={item.link}>
                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.
                            cse_image[0]?.src && (
                                <img
                                className="searchPage__resultImage"
                                src= {
                                    item.pagemap?. 
                                    cse_image?.length
                                    > 0 && 
                                    item.pagemap?. 
                                    cse_image[0]?.src
                                }
                                alt="" 
                                />
                            )}
                            {item.displayLink}
                            
                            </a>

                        <a
                        className="searchPage__result
                        Title" href={item.link}>
                            <h2>{item.title}</h2>
                        </a>

                        <p
                        className="searchPage__result
                        Snippet">{item.snippet}</p>
                    
                        </div>
                ))}
    
    
    
    
            </div>



        )}

  
  

      
    </div>
  )
}

export default SearchPage
