import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { menuApp } from '../../data/menu'
import RenderApp from './components/RenderApp'
import { styles } from './theme/styles'

const Menu = () => {
  return (
    <View style={styles.AppContainer}>
      <FlatList
        data={menuApp}
        renderItem={({item}) => <RenderApp item={item}/>}
        keyExtractor={item => item.id}/>
    </View>
  )
}

export default Menu