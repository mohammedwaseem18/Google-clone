import React, { useState } from 'react'
import './Search.css'
import MicIcon from "@material-ui/icons/Mic"
import SearchIcon from "@material-ui/icons/Search"
import { Button } from '@material-ui/core'
//  import {useHistory} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import {actionTypes} from "../reducer"


function Search({hideButtons = false}) {
    const [{},dispatch] = useStateValue();

    const[input,setInput] = useState('')
    const history = useNavigate();

    const search = (e) =>{
        e.preventDefault();
        history("/search")

        // console.log(('you hit the search button >> ',input))
        console.log("entered",input)

        dispatch({

            type:actionTypes.SET_SEARCH_TERM,
            term:input

        });

        // history.push('/search')
    }
  return (
    <form className='search'>

        <div className='search__input'>
            <SearchIcon className="search__inputIcon"/>
            <input value={input} onChange ={e => setInput(e.target.value)}/>
            <MicIcon/>

        </div>

        {!hideButtons ? (

<div className='search__buttons'>
<Button type='submit' onClick={search} variant="outlined">Google Search</Button>
<Button variant="outlined">I'm Feeling lucky</Button>

</div>

        ):(

            <div className='search__buttons'>
            <Button className='search__buttonHidden' type='submit' onClick={search} variant="outlined">Google Search</Button>
            <Button className='search__buttonHidden' variant="outlined">I'm Feeling lucky</Button>

        </div>



        )}
        

      
      
    </form>
  )
}

export default Search
