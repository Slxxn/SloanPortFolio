import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../theme/styles'
import { useNavigation } from '@react-navigation/native'

const RenderApp = ({item}) => {

  const navigation = useNavigation();
    
  const openApp = () => { 
    navigation.navigate(item.nomApp) 
  }

  return (
    <TouchableOpacity style={styles.render}>
        <Text>{item.title}</Text>
    </TouchableOpacity>
  )
}

export default RenderApp