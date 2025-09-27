export default function Home() {
  const pageStyles: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: "#ffffff",
    padding: "40px",
    gap: "16px",
  };

  const h1: React.CSSProperties = { fontSize: 48, fontWeight: 700, margin: 0 };
  const p: React.CSSProperties = {
    fontSize: 18,
    color: "#555",
    maxWidth: 780,
    margin: "0 auto 16px",
    lineHeight: 1.6,
  };
  const formWrap: React.CSSProperties = {
    display: "flex",
    gap: 12,
    width: "100%",
    maxWidth: 520,
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 8,
  };
  const input: React.CSSProperties = {
    flex: "1 1 280px",
    border: "1px solid #ccc",
    borderRadius: 10,
    padding: "14px 16px",
    fontSize: 16,
  };
  const button: React.CSSProperties = {
    borderRadius: 10,
    padding: "14px 18px",
    fontSize: 16,
    background: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  };
  const imgWrap: React.CSSProperties = { maxWidth: 980, width: "100%", marginTop: 28 };
  const imgStyle: React.CSSProperties = {
    width: "100%",
    display: "block",
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  };

  return (
    <main style={pageStyles}>
      <h1 style={h1}>AI Fashion Studio</h1>
      <p style={p}>
        Design. Generate. Create. Chat with an AI designer and preview mockups in minutes.
      </p>

      {/* OPTION A: direct link button to a waitlist form (Typeform/Google Form/ConvertKit landing) */}
      {/* Replace the href with your real form URL */}
      <div style={formWrap}>
        <input type="email" placeholder="Enter your email" style={input} />
        <a href="https://form.typeform.com/to/XXXX" target="_blank" rel="noreferrer">
          <button style={button}>Join Waitlist</button>
        </a>
      </div>

      {/* OPTION B: Mailchimp POST form (replace action with your Mailchimp form action) */}
      {/* 
      <form
        action="https://YOUR-MAILCHIMP-ACTION-URL"
        method="post"
        target="_blank"
        style={formWrap}
      >
        <input type="email" name="EMAIL" required placeholder="Enter your email" style={input} />
        <button type="submit" style={button}>Join Waitlist</button>
      </form>
      */}

      <div style={imgWrap}>
        <img src="/ui-preview.png" alt="AI Fashion Studio Preview" style={imgStyle} />
        {/* If you didn't add the image yet, temporarily use: src="/next.svg" */}
      </div>
    </main>
  );
}
