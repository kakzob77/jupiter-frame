export default function Home() {
  return (
    <>
      <head>
        <title>Jupiter Lending Frame</title>
        <meta property="og:title" content="Jupiter Lending Dashboard" />
        <meta property="og:description" content="Realtime Solana lending rates via Jupiter" />
        <meta property="og:image" content="https://jup.ag/og-lend.png" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:post_url" content="/api/frame" />
      </head>
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>Jupiter Lending Dashboard</h1>
        <p>Frame ini memberikan update realtime bunga lending USDC dan SOL di Jupiter.</p>
      </main>
    </>
  );
}
