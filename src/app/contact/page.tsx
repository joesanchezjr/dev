export default function Contact() {
  return (
    <>
      <div>
        <h2>Coming soon...</h2>
        <p>
          For now, feel free to{" "}
          <a
            className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-700 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
            href={`mailto:joe@joesanchezjr.com?subject=${encodeURIComponent("✨ Contact Form - Howdy!")}&body=${encodeURIComponent("Hey Joe! Just wanted to let you know that you're the coolest dev ever! 😎🚀")}`}
          >
            use your email client
          </a>
        </p>
      </div>
      <p>
        If you&apos;re a recruiter, hiring manger, or another cool person from a company that I&apos;ve recently applied
        to... I&apos;m building out this page with a mix of the latest tech in React (Canary, but{" "}
        <a
          className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-700 dark:decoration-zinc-600 dark:hover:decoration-zinc-300"
          href="https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024"
        >
          soon to be in React 19
        </a>
        ) , including:
      </p>
      <ul className="list-disc space-y-2 pl-8">
        <li>Server Components</li>
        <li>Server Actions</li>
        <li>
          New Hooks: <code className="font-mono">useOptimistic</code>, <code className="font-mono">useFormState</code>,{" "}
          <code className="font-mono">useFormStatus</code>
        </li>
      </ul>
      <p>Check back later to see if it&apos;s finished!</p>
    </>
  )
}
