import { Helmet } from 'react-helmet-async';
import Categories from './Categories';
import Products from './Products';

const Home = () => {  
    return (
        <div>
            <Helmet>
                <title>Home | InfiniteMart</title>
            </Helmet>
            <Categories/>
            <Products></Products>
        </div>
    );
};

export default Home;