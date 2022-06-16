import React from 'react';

export default function LoginPage() {
  const googleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  }




  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>

          </div>
          
        </div>

      </div>
      <div className='grid place-items-center'>
        <button type='button' onClick={googleLogin} className="login-with-google-btn" >
          Sign in with Google
        </button>
      </div>
    </>
  )
}