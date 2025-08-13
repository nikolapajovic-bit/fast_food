import { getCurrentUser } from '@/lib/appwrite'
import { User } from '@/type'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = ({ user: { name, email }}: { user: User }) => {
  const user = getCurrentUser();

  return (
    <SafeAreaView className='bg-white h-full'>
      
    </SafeAreaView>
  )
}

export default Profile