import NavBar from "./navbar";
import Entete from "./entete";

function Header() {

    return(
      <header className=" p-8 ">
        <div className=" shadow-lg fixed top-0 left-0 w-full z-50 ">
        <div className="container mx-auto py-4 px-6">


        {/* <div className="bg-gray-200 px-6 "  >   */}
          <Entete/>
          <NavBar/>
        </div>
        {/* </div> */}
        </div >
      </header>
      
    )

}
export default Header;