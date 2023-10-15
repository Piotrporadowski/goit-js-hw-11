import axios from 'axios';

export const fetchData = async (searchQuestion, currentPage) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '38606414-d1218f221fd8daceb76c83e1a',
        q: searchQuestion,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: 40,
      },
    });
    console.log('response:', response);
    return response; 
  } catch (error) {
    console.log('error:', error);
    throw error; 
  }
};

