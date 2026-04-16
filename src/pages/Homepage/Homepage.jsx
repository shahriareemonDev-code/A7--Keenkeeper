import React from 'react';
import Banner from '../../components/homepage/Banner';
import YourFriends from '../../components/homepage/YourFriends';
import FriendsCart from '../../components/homepage/FriendsCart';

const Homepage = () => {
    return (
        <div>
           <Banner> </Banner>
           <YourFriends> </YourFriends>
           <FriendsCart> </FriendsCart>
        </div>
    );
};

export default Homepage;