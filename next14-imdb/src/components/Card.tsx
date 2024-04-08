import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  result: any
}

export default function Card(props: Props) {
  const { result } = props

  return (
    <div>
      <Link href={`/movie/${result.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
        width={500}
        height={300}
        className='sm:rounded-t-lg' alt={''}      >

        </Image>
      </Link>
    </div>
  )
}
