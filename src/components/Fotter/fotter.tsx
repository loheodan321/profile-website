import {
  SFotter,
  SFotterSubContent,
  SFotterContent,
  SFotterIconList,
} from './fotter-style';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
const Fotter = () => {
  return (
    <SFotter>
      <SFotterContent>
        <span>Follow us on:</span>
        <SFotterIconList>
          <FiTwitter />
          <FiFacebook />
          <FiInstagram />
        </SFotterIconList>
      </SFotterContent>
      <SFotterContent>
        <span>Subscribe to our newslette</span>
        <SFotterSubContent>
          <input type="email" placeholder="Enter your email herer *" />
          <button>Subscribe Now</button>
        </SFotterSubContent>
      </SFotterContent>
      <SFotterContent>
        <span>Contact Us:</span>
        <span>09323377** - HCM city Binh Thanh District</span>
      </SFotterContent>
    </SFotter>
  );
};

export default Fotter;
