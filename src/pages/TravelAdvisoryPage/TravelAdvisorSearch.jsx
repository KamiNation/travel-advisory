import React, { useContext, useState } from 'react'
import { travelAdvContext } from './TravelAdvisorContext'


const TravelAdvisorSearch = (props) => {

  // The below is a destructed useContext that allows this component to 
  // have access to the children, inside the contextApi 
  // component "TravelAdvisorProvider"
  const { userData, searchAdvInput, updatesetSearchAdvInput, filteredResult, updateSetFilteredResult } = useContext(travelAdvContext)


  // console.log(filteredResult);
  // console.log(updateSetFilteredResult);


  // This searchItems function takes in a parameter "searchValue"
  // and inside it is a set state that takes in the parameter from the 
  // function 

  const toggle=()=>{
    if (searchAdvInput.length >= 1) {
      window.scrollTo(0,0)
    }
  
  }
  const searchItems = (searchValue) => {

    // The updatesetSearchAdvInput is a set state that updates the state of the
    // searchAdvInput state which then updates(shows on) the input field, 

    // This is to allow the input field to display the text being typed.

    updatesetSearchAdvInput(searchValue)


    // The below code checks if the input field is empty, if it's  
    // it displays all the data, if it's not it filters the data based on the
    // value in the input field

    if (searchAdvInput !== '') {
      // const filteredInput = userData.results && userData.results.filter((item)
      const filteredInput = userData.filter((item) => {

        // Object.values(item) would return an array containing all the values of the item object. 

        // The .join() method in JavaScript is used to concatenate the elements of an array into a
        // single string. When you call .join(''), you're specifying an empty string '' as the 
        // separator between the elements of the array. It simply concatenates all the elements of 
        // the array into a single string without adding any additional characters between them.

        // The toLowerCase method changes the string values into lowercase.

        // And lastly, we are checking if this string includes our searhAdvInput that we typed into 
        // the search bar. We also convert it to lowercase to make sure that if we type our term in 
        // uppercase, it converts the string to lowercase.

        return Object.values(item).join('').toLowerCase().includes(searchAdvInput.toLowerCase())
      })


      // data displayed based on the filtered data
      updateSetFilteredResult(filteredInput)
      console.log(filteredInput);
    }
    else {
      // data dispalyed based on if it's empty
      updateSetFilteredResult(userData)
    }
    console.log(searchAdvInput)

  }

  return (
    <input id='searche' type="search"  value={searchAdvInput} placeholder="Search advisor by state/name" onChange={(e) => {searchItems(e.target.value),toggle() }} />

  )
}

export default TravelAdvisorSearch