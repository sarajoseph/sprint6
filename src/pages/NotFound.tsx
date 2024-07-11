/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 max-w-3xl mx-auto py-20 h-screen">
      <h1 className="text-3xl font-bold">Página no encontrada</h1>
      <Link to="/" className="btn btn-neutral max-w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        Ir a la página principal
      </Link>
    </div>
  )
}
