import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ user }: any) {
  return (
    <main
      className={`flex justify-center items-center h-screen ${inter.className}`}
    >
      <article className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-lg font-bold mb-4">User Information</p>
        <div className="mb-4">
          <p className="text-sm">ID: {user.id}</p>
          <p className="text-sm">Username: {user.username}</p>
        </div>
        <section className="mb-4">
          <p className="text-sm font-bold mb-2">Address:</p>
          <p className="text-sm">Street: {user.address.street}</p>
          <p className="text-sm">Suite: {user.address.suite}</p>
          <p className="text-sm">City: {user.address.city}</p>
          <p className="text-sm">Zipcode: {user.address.zipcode}</p>
          <div className="mt-2">
            <p className="text-sm font-bold">Geo:</p>
            <p className="text-sm">Lat: {user.address.geo.lat}</p>
            <p className="text-sm">Lng: {user.address.geo.lng}</p>
          </div>
        </section>
        <div className="mb-4">
          <p className="text-sm">Phone: {user.phone}</p>
          <p className="text-sm">Website: {user.website}</p>
        </div>
        <section>
          <p className="text-sm font-bold mb-2">Company:</p>
          <p className="text-sm">Name: {user.company.name}</p>
          <p className="text-sm">Catch Phrase: {user.company.catchPhrase}</p>
          <p className="text-sm">BS: {user.company.bs}</p>
        </section>
      </article>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
