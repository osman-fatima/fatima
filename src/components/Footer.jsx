function Footer() {
  return (
    <footer className="app-footer">
      <div>
        <p>Copyright 2026 Nailes Studio. Beautiful nails made with care.</p>
      </div>
      <div className="footer-links">
        <a
          href="https://instagram.com/l.nailed.it"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Z"
              fill="currentColor"
            />
            <path
              d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
              fill="currentColor"
            />
            <path
              d="M17.75 6.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
              fill="currentColor"
            />
          </svg>
          <span>Instagram</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
