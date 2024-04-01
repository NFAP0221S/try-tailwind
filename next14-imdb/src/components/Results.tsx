import React from 'react'


interface props {
  results: any[]
}

export default function Results(props: props) {
  const {results} = props
  return (
    <div>
      {
        results.map(result => (
          <div key={result.id}>
            <h2>{result.original_title}</h2>
          </div>
        ))
      }
    </div>
  )
}
