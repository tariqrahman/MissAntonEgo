// Array containing all data related to the content filled for each Restaurant
const RESTAURANT_DATA = [
    {
        id: 1,
        name: 'Elephant Sushi',
        date: '28 June 2022',
        location: 'San Francisco, California',
        cuisine: 'japanese',
        dish:'avocado roll and insane crazy awesome second roll',
        description: 'tariq and i kept this spot in the back of our minds over the past couple months after seeing it across the street from a pizza place we ate at. the second roll had salmon, crispy onion, avocado, olive oil and ponzu sauce. i absolutely loved it because i love ponzu, tariq liked it because of creativity of flavors. we also got a rainbow roll (good) and a spicy hamachi roll (great) that interestingly only had a kick of lemon zest on the end pieces, which i had and thoroughly enjoyed. i was specifically instructed by tariq to mention how odd it was of the restaurant to not have provided us with soy sauce boats, the one pictured was make-shift from a wasabi boat. furthermore, the rate of flow at which the soy sauce was dispensed at was far too slow to be intended to be poured into a boat, and was most definitely made to be dropped directly on the sushi which seemed wrong. also they had a communal ginger container which cannot be in correspondence with the sf health code…right? i ate from it anyways i can’t help it. also tariq prefers sushi with rice on the outside.',
        rating: 8.6,
        image: ''
    },
    {
        id: 2,
        name: 'The Press',
        date: '18 June 2022',
        location: 'Livermore, California',
        cuisine: 'american',
        dish: 'sourdough toast w ricotta cheese topped with summer peaches and fresh tomatoes, respectively',
        description: 'tariq was pleasantly surprised by the peaches on toast, i thought it tasted as good off the plate as it sounded off the menu. very good, also the basil and olive oil on top was a nice touch!',
        rating: 8.7,
        image: ''
    },
    {
        id: 3,
        name: 'Hungarian Pastry Shop',
        date: '2 June 2022',
        location: 'Manhatten, New York',
        cuisine: 'bakeries',
        dish: 'spinach and feta pie, crossiant with jam, and hungarian coffee',
        description: 'this was probably my favorite dining experience of the whole trip. the local hungarian pastry shop just felt like home and tally and i sat tucked away in the corner and enjoyed this array under a rusty silly little lightbulb. best coffee ive ever had, yeah. best texture and flavor of pastries ive ever had, yeah. ive realized that what constitutes the best pastry bake is when it’s not messy flaky. the coffee was enhanced by the cinnamon and cardamom and the whipped cream on top sealed it all in and supplemented every sip WONDERFULLY',
        rating: 10,
        image: ''
    },
    {
        id: 4,
        name: 'Brooklyn Bagel & Coffee',
        date: '1 June 2022',
        location: 'Brooklyn',
        cuisine: 'bakeries',
        dish: 'everything bagel with cream cheese',
        description: 'yeah brooklyn bagels 100% gets a solid 10. best bagel i’ve had. i wish more than anything i got a picture of the cross section. i was airy and light, chewy and soft, but ever so slightly charred introducing a smoky flavor from the perfect toasting job. the cream cheese was fantastic of course, also i think it’s so wild how they’re displayed like ice cream, common theme for cream cheese storage in new york',
        rating: 9.1,
        image: ''
    },
    {
        id: 5,
        name: `John's Of Bleeker Street`,
        date: '1 June 2022',
        location: 'Manhattan, New York',
        cuisine: 'american',
        dish: 'classic pie',
        description: 'solid pizza honestly. again, not that into pizza and feel like there only so much you can do with it. the bake on this was perfect and was my preferred thickness which is thin. i either like thin pizza or deep dish, no in between. dave porkboy rated this place a 9.2 so that should tell you something',
        rating: 8.7,
        image: ''
    },
    {
        id: 6,
        name: 'Burma Burma',
        date: '31 March 2022',
        location: 'Dublin, California',
        cuisine: 'southEast',
        dish: 'burma mint and jalapeño chicken with coconut rice',
        description: 'i’ve come to the conclusion that burma is going to be that one restaurant i base returning to my hometown around solely to taste the incredibly flavored nostalgia. i haven’t been coming here for all that long but there’s just something about the way it’s tucked in the corner of dublin that makes it feel special.\nthe combo of flavors here was actually probably one of my favorites, sort of reminded me of a savory equivalent to mango sticky rice.',
        rating: 10,
        image: '',
    },
    {
        id: 7,
        name: 'The Press',
        date: '26 March 2022',
        location: 'Livermore, California',
        cuisine: 'american',
        dish: 'bean water, fancy mocha, triple cheese and avocado sandy, and toastini with fresh tomatoes and homemade ricotta topped with basil',
        description: 'honorable mention to the tomato soup because i’m convinced the press does it best, truly the most perfect balance between sweet and savory and oh so creamy. also today was a beautiful day so those fresh tomatoes were hitting hard. i love the press. oh i think my dish could’ve used flakey salt to add more flavor dimension, that’s all.',
        rating: 9.4,
        image: '',
    },
    {
        id: 8,
        name: "Fatima's Grill",
        date: '6 January',
        location: 'Downey, California',
        yelp: 'https://www.yelp.com/biz/fatimas-grill-downey',
        cuisine: 'mexican',
        dish: 'carne asada hot cheetos burrito',
        description: 'it was honestly so fun to experience the epitome of fatty instagram foodie food. could never imagine eating this more than once in my life, but it was a great time!!! sat with this in the car for only about 30 minutes before consumption so the cheetos inevitably became soggy. salsa verde cut the cheesy flavor well i must say.',
        rating: 7.5,
        image: '',
    },
    {
        id: 9,
        name: 'The Butcher, The Baker, The Cappuccino Maker',
        date: '5 January 2022',
        location: 'West Hollywood, California',
        yelp: 'https://www.yelp.com/biz/the-butcher-the-baker-the-cappuccino-maker-west-hollywood-2',
        cuisine: 'american',
        dish: 'tomato soup with cheese bread, margarita flatbread, salmon over baby spinach and black rice',
        description: 'we killed the order, these dishes worked so well together. everything was right up to standard, except the latte. LOOK AT THE FUCKING DETAILS IT WAS INSANE. we weren’t rocking with the sharp cheddar cheese on the bread that came with the soup though.',
        rating: 7.9,
        image: '',
    },



]

// Returns data from array to external components
export function getAmerican() {
    return RESTAURANT_DATA.filter(event => event.cuisine === 'american')
}

export function getBakeries() {
    return RESTAURANT_DATA.filter(event => event.cuisine === 'bakeries')
}

export function getSouthEast() {
    return RESTAURANT_DATA.filter(event => event.cuisine === 'southEast')
}

export function getJapanese() {
    return RESTAURANT_DATA.filter(event => event.cuisine === 'japanese')
}

export function getMexican() {
    return RESTAURANT_DATA.filter(event => event.cuisine === 'mexican')
}