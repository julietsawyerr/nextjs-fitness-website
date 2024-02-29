import React from 'react'

type Props = {
    url: string
    options: {
        method: string;
        headers: {
            'X-RapidAPI-Key': string;
            'X-RapidAPI-Host': string;
        };
    }
}

const url = 'https://work-out-api1.p.rapidapi.com/search?Muscles=biceps';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
	}
};


const FetchData = async ({url, options}: Props) => {
    const response = await fetch(url, options)
    const data = await response.json()
  
    return data
}

export default FetchData