"use client"

import {usePathname} from "next/navigation";

const Home = () => {
  const pathname = usePathname()
  let url = process.env.NEXT_PUBLIC_ROOT_URL;

  switch (pathname) {
    case "/":
      url = process.env.NEXT_PUBLIC_ROOT_URL;
      break;
    case "/firm":
      url = process.env.NEXT_PUBLIC_FIRM_URL;
      break;
    default:
      url = process.env.NEXT_PUBLIC_ROOT_URL;
      break;
  }

  return (
      <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
        {url ? (
            <iframe
                src={url}
                style={{ height: '100%', width: '100%', border: 'none' }}
                title="External Content"
            />
        ) : (
            <p>Loading...</p>
        )}
      </div>
  );
};

export default Home;
