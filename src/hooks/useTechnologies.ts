import { useEffect, useState } from 'react'
import type { Technology } from '../types/technology'

export function useTechnologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    async function loadTechnologies() {
      try {
        const response = await fetch('/technologies.json')
        if (!response.ok) throw new Error('Technology catalogue could not be loaded.')
        const data: Technology[] = await response.json()
        if (active) setTechnologies(data)
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : 'Something went wrong.')
      } finally {
        if (active) setLoading(false)
      }
    }

    loadTechnologies()
    return () => {
      active = false
    }
  }, [])

  return { technologies, loading, error }
}
