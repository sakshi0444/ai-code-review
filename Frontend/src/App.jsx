import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [logoUrl, setLogoUrl] = useState('')
  const [error, setError] = useState('')

  async function generateLogo() {
    if (!prompt.trim()) {
      setError('Please enter a description for your logo')
      return
    }

    try {
      setLoading(true)
      setError('')
      const response = await axios.post('http://localhost:3000/ai/generate-logo', { prompt })
      setLogoUrl(response.data.imageUrl)
    } catch (error) {
      console.error('Error generating logo:', error)
      setError('Failed to generate logo. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <h1>AI Logo Generator</h1>
          <p>Describe the logo you want to generate</p>
          <div className="input-container">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., A minimalist logo for a tech startup with blue and green colors"
              rows={5}
            />
          </div>
          <button
            onClick={generateLogo}
            className="generate-btn"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Logo'}
          </button>
          {error && <div className="error">{error}</div>}
        </div>
        <div className="right">
          {logoUrl ? (
            <div className="logo-container">
              <img src={logoUrl} alt="Generated Logo" className="generated-logo" />
              <a href={logoUrl} download="ai-generated-logo.png" className="download-btn">
                Download Logo
              </a>
            </div>
          ) : (
            <div className="placeholder">
              Your generated logo will appear here
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default App

