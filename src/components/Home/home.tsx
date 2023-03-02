import {
  SHome,
  SBackGround,
  SHomeIntroduce,
  SHomeContent,
  SHomeProducts,
} from './home-style';
import { SShopNowBtn } from '../../app-style';
import { Link } from 'react-router-dom';
import Product from './Product/product';

const Home = () => {
  return (
    <SHome>
      <SBackGround></SBackGround>
      <SHomeIntroduce>
        <img
          src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2016&q=80"
          alt="hom-intro-img"
        />
        <SHomeContent>
          <label>Art is never finished, only abandoned</label>
          <div></div>
          <p>
            Art is standing with one hand extended into the universe and one
            hand extended into the world, and letting ourselves be a conduit for
            passing energy.
          </p>
          <SShopNowBtn>
            <Link to={'/shop'}>Shop now</Link>
          </SShopNowBtn>
        </SHomeContent>
      </SHomeIntroduce>
      <SHomeProducts>
        <label>Our Products</label>
        <p>
          <i>"I paint flowers so they will not die"</i>
        </p>
        <Product />
      </SHomeProducts>
    </SHome>
  );
};

export default Home;
