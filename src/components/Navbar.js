import React from 'react'
import SearchBar from './SearchBar'
import ProfileShortcut from './ProfileShortcut'

export default function Navbar() {
  return (
    <div className='container flex items-center justify-between'>
      <SearchBar />
      <ProfileShortcut />
    </div>
  )
}
