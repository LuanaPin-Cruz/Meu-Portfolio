import { useEffect, useState } from 'react'

/**
 * Digita uma lista de linhas, uma de cada vez, como um terminal real.
 * Cada item de `lines` é { prompt, text, speed? }.
 * Retorna as linhas já "digitadas" e se ainda está digitando a última.
 */
export function useTypewriter(lines, { startDelay = 300, lineDelay = 350 } = {}) {
  const [renderedLines, setRenderedLines] = useState([])
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    // Respeita usuários que preferem menos movimento: mostra tudo de uma vez.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setRenderedLines(lines.map((l) => ({ ...l, typed: l.text })))
      setIsDone(true)
      return
    }

    let cancelled = false
    let timeouts = []

    async function run() {
      await wait(startDelay)
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return
        const line = lines[i]
        setRenderedLines((prev) => [...prev, { ...line, typed: '' }])
        const speed = line.speed || 28
        for (let charIndex = 1; charIndex <= line.text.length; charIndex++) {
          if (cancelled) return
          await wait(speed)
          setRenderedLines((prev) => {
            const next = [...prev]
            next[i] = { ...next[i], typed: line.text.slice(0, charIndex) }
            return next
          })
        }
        await wait(lineDelay)
      }
      if (!cancelled) setIsDone(true)
    }

    function wait(ms) {
      return new Promise((resolve) => {
        const id = setTimeout(resolve, ms)
        timeouts.push(id)
      })
    }

    run()

    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { renderedLines, isDone }
}
