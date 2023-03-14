import {
  SHeader,
  SLogo,
  SMenuBtn,
  SNavBar,
  SHeaderContent,
  SCartBtn,
  SCartAmount,
  SBanner,
  SFilterBy,
} from './header-style';
import { GrMenu, GrCart } from 'react-icons/gr';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeState, setActiveState] = useState(false);

  const activeStateHandler = () => {
    setActiveState((prev) => !prev);
  };

  return (
    <>
      <SHeader>
        <SLogo>stranger things</SLogo>
        <SHeaderContent>
          <SNavBar active={activeState}>
            <span onClick={activeStateHandler}>
              <Link to={'/'}>Home</Link>
            </span>
            <span onClick={activeStateHandler}>
              <Link to={'/about'}>About</Link>
            </span>
            <span onClick={activeStateHandler}>
              <Link to={'/products'}>Products</Link>
            </span>
            <span onClick={activeStateHandler}>
              <Link to={'/contact'}>Contact</Link>
            </span>
            <SCartBtn>
              <GrCart />
              <SCartAmount>10</SCartAmount>
            </SCartBtn>
          </SNavBar>
          <SMenuBtn>
            <GrMenu
              onClick={() => {
                setActiveState((prev) => !prev);
              }}
            />
          </SMenuBtn>
        </SHeaderContent>
      </SHeader>
      <SBanner>Free shipping on order over 40$</SBanner>
    </>
  );
};

export default Header;
