"use client"

import React, { useEffect } from 'react'

// digest 속성은 발생한 에러에 대한 추가적인 요약 정보
// 예를 들어, 네트워크 요청 실패와 관련된 에러 객체가 있을 때, digest 속성에는 HTTP 응답 코드의 해시값이나 요청에 대한 요약 정보가 포함될 수 있습니다.
interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

export default function error(props:Props) {
  const {error, reset} = props

  useEffect(() => {
    console.log(error)
  },[error])

  return (
    <div className='text-center mt-10'>
      <h1>문제가 생겼으니 다시 시도해보세요.</h1>
      <button className='hover:text-amber-600' onClick={() => reset()}>다시 시도하기</button>
    </div>
  )
}
