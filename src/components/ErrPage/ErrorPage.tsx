import { useRouteError, Link } from 'react-router-dom';
import { SCloseNav, SErrorPage } from './errorPage-style';
import { FaRegWindowClose } from 'react-icons/fa';

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <SErrorPage>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <SCloseNav>
        <Link to={'/'}>{/* <FaRegWindowClose /> */}X</Link>
      </SCloseNav>
    </SErrorPage>
  );
}
