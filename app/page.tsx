import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1>Hello World</h1>
        <section className="my-4 bg-blue-100 p-4 rounded-md">
          <h2>Section 1</h2>
          <p>Hello World</p>
        </section>
        <section className="my-4 bg-green-100 p-4 rounded-md">
          <h2>Section 2</h2>
          <p>Hello World</p>
        </section>
        <section className="my-4 bg-yellow-100 p-4 rounded-md">
          <h2>Section 3</h2>
          <p>Hello World</p>
        </section>
      </div>
    </main>
  );
}
