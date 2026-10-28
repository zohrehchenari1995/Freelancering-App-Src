import React from 'react'
import CompleteProfileForm from '../features/authentication/CompleteProfileForm'

function CompleteProfile(onSubmit) {
  return (
   <div className="container xl:max-w-screen-xl">
     <div>
      <CompleteProfileForm />
    </div>
   </div>
  )
}

export default CompleteProfile