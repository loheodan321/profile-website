import { SAbout, SBackGround, SAboutContent } from './about-style';

const url =
  'https://images.unsplash.com/photo-1529154166925-574a0236a4f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80';
export const About = () => {
  return (
    <SAbout>
      <SBackGround url={url}></SBackGround>
      <SAboutContent>
        <label>Who we are</label>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you. ​ This is a
          great space to write long text about your company and your services.
          You can use this space to go into a little more detail about your
          company. Talk about your team and what services you provide. Tell your
          visitors the story of how you came up with the idea for your business
          and what makes you different from your competitors. Make your company
          stand out and show your visitors who you are. I'm a paragraph. Click
          here to add your own text and edit me. It’s easy. Just click “Edit
          Text” or double click me to add your own content and make changes to
          the font. Feel free to drag and drop me anywhere you like on your
          page.
        </p>
      </SAboutContent>
    </SAbout>
  );
};
