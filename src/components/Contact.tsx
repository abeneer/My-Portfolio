export default function Contact() {
  return (
    <section id="contact" className="container py-20">
      <h2 className="section-title"> Contact</h2>

      <div className="mt-8 grid gap-8 md:grid-cpls-2">
        <div>
          <p className="opacity-80">have an idea?</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              Email:{" "}
              <a className="underline" href="mailto:developer120722@gmail.com">
                developer120722@gmail.com
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a className="underline" href="https://github.com/your-handle">
                github.com/your-handle
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                className="underline"
                href="https://linkedin.com/in/your-handle"
              >
                linkedin.com/in/your-handle
              </a>
            </li>
          </ul>
        </div>

        <form
          className="glass space-y-3 p-6"
          method="POST"
          action="https://formspree.io/f/your-form-id" /* replace later */
        >
          <input name="name" required className="w-full rounded-xl border bg-transparent px-4 py-3" placeholder="Your name" />
          <input name="email" type="email" required className="w-full rounded-xl border bg-transparent px-4 py-3" placeholder="Your email" />
          <textarea name="message" rows={4} required className="w-full rounded-xl border bg-transparent px-4 py-3" placeholder="Tell me about your project..." />
          <button className="glass px-5 py-3" type="submit">Send</button>
        </form>
        
      </div>
    </section>
  );
}
