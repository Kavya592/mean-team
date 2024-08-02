/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
    title: 'Donation Platform',
    pageHeader: {
    title: 'Dharma',
    strapline: '_____Donation for a cause!_____'
    },
    locations: [{
    name: 'DONATION PLATFORM',
    address: '4/88B-36 old safilguda,Nagaram',
    rating: 4.5,
    // facilities: ['  children ', 'adults', 'old age'],
    distance: '100m'
    },]
});
};
    /* GET 'Location info' page */
    const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
    };
    /* GET 'Add review' page */
    const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
    };
    module.exports = {
        homelist,
        locationInfo,
        addReview
        };