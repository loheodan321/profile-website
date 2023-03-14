import {
  SHome,
  SBackGround,
  SHomeIntroduce,
  SHomeContent,
  SHomeProducts,
  SHomeBanner,
  SBanner,
  SHomeBannerContent,
  SHomeLogin,
  SHomeLoginBtn,
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
      <SHomeBanner>
        <SBanner bannerNumber={1}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1554533899-787ef890e98f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="banner-img-01"
            />
          </div>
          <SHomeBannerContent>
            <span>Order 2 arts</span>
            <label>Save 20%</label>
            <p>
              Art is standing with one hand extended into the universe and one
              hand extended into the world, and letting ourselves be a conduit
              for passing energy.
            </p>
            <SShopNowBtn>
              <Link to={'/shop'}>Shop now</Link>
            </SShopNowBtn>
          </SHomeBannerContent>
        </SBanner>
        <SBanner bannerNumber={2}>
          <SHomeBannerContent>
            <span>Try Our</span>
            <label>Newest Flavor</label>
            <p>
              Art is standing with one hand extended into the universe and one
              hand extended into the world, and letting ourselves be a conduit
              for passing energy.
            </p>
            <SShopNowBtn>
              <Link to={'/shop'}>Shop now</Link>
            </SShopNowBtn>
          </SHomeBannerContent>
          <div>
            <img
              src="https://images.unsplash.com/photo-1603693786252-fcfcee1203fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="banner-img-01"
            />
          </div>
        </SBanner>
      </SHomeBanner>
      <SHomeLogin>
        <span>Sign up for Our Newsletter</span>
        <label>For some art tips</label>
        <SHomeLoginBtn>Sign in</SHomeLoginBtn>
      </SHomeLogin>
    </SHome>
  );
};

export default Home;
