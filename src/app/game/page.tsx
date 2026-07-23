'use client'

import { useState } from 'react'

export default function Game() {
  const [score, setScore] = useState(0)

  return (
    <div style={{
      background: 'white',
      padding: '30px',
      borderRadius: '10px',
      textAlign: 'center'
    }}>
      <h1>🎮 Game</h1>

      <p style={{ fontSize: '24px' }}>Score: {score}</p>

      <button
        onClick={() => setScore(score + 1)}
        style={{
          marginTop: '20px',
          padding: '12px 25px',
          background: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Increase Score
      </button>
    </div>
  )
}
