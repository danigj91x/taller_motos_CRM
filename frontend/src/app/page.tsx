export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <section className="flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-primary-800">
          🏍️ MotoTaller Demo
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          La base del proyecto está lista
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Sitio en construcción: aquí irán la portada, los servicios, la galería
          de trabajos, las opiniones y el formulario de contacto del taller
          ficticio.
        </p>
        <div className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <p>
            <span className="font-semibold text-primary-600">Next.js</span>{" "}
            +{" "}
            <span className="font-semibold text-primary-600">TypeScript</span>{" "}
            +{" "}
            <span className="font-semibold text-primary-600">Tailwind CSS</span>{" "}
            (App Router)
          </p>
          <p>
            Contenedores:{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
              docker compose up
            </code>{" "}
            →{" "}
            <a
              href="http://localhost:3000"
              className="font-medium text-primary-600 underline underline-offset-2 hover:text-primary-700"
            >
              localhost:3000
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
