import React from 'react'
import Card from './Card'


interface props {
  results: any[]
}

export default function Results(props: props) {
  const {results} = props
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {
        results.map(result => (
          // <div key={result.id}>
          //   <h2>{result.original_title}</h2>
          // </div>
          <Card key={result.id} result={result} />
        ))
      }
    </div>
  )
}
