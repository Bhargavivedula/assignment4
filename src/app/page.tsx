export default function Home() {
  return (
    <div style={{
      background: 'white',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '32px' }}>🎮 Welcome to Game App</h1>
      <p style={{ color: 'gray', marginTop: '10px' }}>
        Play, compete, and track your score.
      </p>
    </div>
  )
}
