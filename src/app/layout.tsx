import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#f5f5f5' }}>
        
        {/* Navbar */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 30px',
          background: '#111',
          color: 'white'
        }}>
          <h2 style={{ margin: 0 }}>🎮 GameApp</h2>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
            <a href="/game" style={{ color: 'white', textDecoration: 'none' }}>Game</a>
            <a href="/leaderboard" style={{ color: 'white', textDecoration: 'none' }}>Leaderboard</a>
            <a href="/health" style={{ color: 'white', textDecoration: 'none' }}>Health</a>
          </div>
        </nav>

        {/* Page Content */}
        <main style={{
          maxWidth: '1000px',
          margin: '40px auto',
          padding: '20px'
        }}>
          {children}
        </main>

      </body>
    </html>
  )
}
