'use client'

import { useState } from 'react'

const NAME_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/

export function UserForm() {
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit() {
    // limpa erro anterior
    setError(null)

    if (!name.trim()) {
      setError('O nome é obrigatório')
      return
    }

    if (!NAME_REGEX.test(name)) {
      setError('O nome não pode conter números ou caracteres especiais')
      return
    }

    setSubmittedName(name)
    setName('')
  }

  return (
    <div style={{ padding: 24 }}>
      <h1 data-testid="title">Cadastro de Usuário</h1>

      <input
        data-testid="name-input"
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        data-testid="submit-button"
        onClick={handleSubmit}
      >
        Salvar
      </button>

      {error && (
        <p data-testid="error-message" style={{ color: 'red' }}>
          {error}
        </p>
      )}

      {submittedName && !error && (
        <p data-testid="success-message">
          Usuário <strong>{submittedName}</strong> cadastrado com sucesso
        </p>
      )}
    </div>
  )
}
