
import "./App.css";
import { UserHeader } from "./molecula/headerUser/headerUser";
import { SpotifyCard } from "./molecula/spotifyMusic/spotifyMusic";
import { ButtonSection } from "./organismo/buttonsSection";

function Layout() {
  
  return (
    <>
      <UserHeader />
      <ButtonSection/>
      <SpotifyCard/>
      </>
  );
}

export default Layout;
