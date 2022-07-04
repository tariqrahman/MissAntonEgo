// Array containing all data related to the content filled for each Restaurant
const RESTAURANT_DATA = [
    {
        id: 1,
        name: 'Elephant Sushi',
        location: 'San Francisco',
        description: '',
        rating: 5,
        image: ''
    },
    {
        id: 2,
        name: 'The Press',
        location: 'Livermore',
        description: '',
        rating: 5,
        image: ''
    },
    {
        id: 3,
        name: 'Hungarian Pastry Shop',
        location: 'NYC',
        description: '',
        rating: 5,
        image: ''
    },
    {
        id: 4,
        name: 'Brooklyn Bagel & Coffee',
        location: 'Brooklyn',
        description: '',
        rating: 5,
        image: ''
    },
    {
        id: 5,
        name: `John's Of Bleeker Street`,
        location: 'Manhattan',
        description: '',
        rating: 5,
        image: ''
    },
]

// Returns data from array to external components
export function getData() {
    return RESTAURANT_DATA;
}