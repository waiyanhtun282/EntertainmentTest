import "./nav.css";
// for nav

const navLinks = [
  {
    id: 1,
    navLink: "Home",
    path: "/",
  },
  {
    id: 2,
    navLink: "Support",
    path: "/support",
  },
  {
    id: 3,
    navLink: "Your Ticket",
    path: "/ticket",
  },
  {
    id: 4,
    navLink: "SignIn",
    path: "/signin",
  },
];

const Nav = () => {
  return (
    <header className=" container mx-auto border-b-2">
      <nav className=" nav-main ">
        <h1 className=" text-2xl font-bold">Logo</h1>
        <div className=" flex gap-10">
          <ul className="nav-ul">
            {navLinks?.map((nav, index) => (
              <li className=" cursor-pointer" key={nav.id + index}>
                {nav.navLink}
              </li>
            ))}
          </ul>
          <select
            name=""
            id=""
            className=" border-gray-300 bg-white font-medium"
          >
            <option value="" >En</option>
            <option>My</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
