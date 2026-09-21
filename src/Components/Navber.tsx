import Link from "next/link";

const Navber = () => {
  const Navlink = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/books">All Books</Link>
      </li>
      <li>
        <Link href="/listed-books">Listed Books</Link>
        
      </li>
      <li>
        <a>Pages to Read</a>
      </li>
    </>
  );

  return (
    <div className="bg-base-100">
      <div className="navbar  container mx-auto py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {Navlink}
            </ul>
          </div>
          <a className="text-3xl font-extrabold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-lg gap-2">{Navlink}</ul>
        </div>
        <div className="navbar-end gap-5">
          <button className="btn btn-success text-white">Sign in</button>
          <button className="btn btn-info text-white">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
