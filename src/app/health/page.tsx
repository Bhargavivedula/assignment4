async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  return res.json()
}

export default async function Health() {
  const data = await getData()

  return (
    <div style={{
      background: 'white',
      padding: '30px',
      borderRadius: '10px'
    }}>
      <h1>❤️ Health Check</h1>
      <pre style={{
        background: '#eee',
        padding: '15px',
        borderRadius: '5px'
      }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
