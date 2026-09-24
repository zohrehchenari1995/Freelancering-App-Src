import React from 'react'

function TextField({label,name,value,onChange}) {
  return (
     <div>
          <label
            htmlFor={name}
            className="block font-bold sm:text-sm md:text-base lg:text-lg mb-2 xl:text-xl"
          >
            {label}
          </label>
          <input
            value={value}
            onChange={onChange}
            id={name}
            type="tel"
            className="textFeild__input w-full"
            autoComplete="off"
            name={name}
          />
        </div>
  )
}

export default TextField