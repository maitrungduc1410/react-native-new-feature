import React, { useState } from 'react';
import { StyleSheet, View, Image, Button, StatusBar, Switch, Text, Linking } from 'react-native';
import NewFeature from 'react-native-new-feature';
import Icon from 'react-native-vector-icons/FontAwesome';

const COLOR_BLUE = 'rgb(21, 124, 247)'
const COLOR_LITE_BLUE = 'rgb(100, 201, 246)'
const COLOR_ORANGE = 'rgb(235, 119, 33)'
const COLOR_PURPLE = 'rgb(182, 53, 251)'
const TINT_COLORS = [COLOR_BLUE, COLOR_LITE_BLUE,COLOR_ORANGE,COLOR_PURPLE]

const COLOR_WHITE = 'white'
const COLOR_BLACK = 'black'

const IMAGE_SIZE = 45
const BACKGROUND_WHITE = 'white'
const BACKGROUND_DARK = 'rgb(20, 29, 38)'

let currentColorIndex = 0

const Home = (props) => {
  const [isDark, setIsDark] = useState(false)
  const [tintColor, setTintColor] = useState(COLOR_BLUE)
  const [visible, setVisible] = useState(false)
  const [animation, setAnimation] = useState('fade')
  const [appearAnimation, setAppearAnimation] = useState('fade')
  const [align, setAlign] = useState('left')

  const background = isDark ? BACKGROUND_DARK : BACKGROUND_WHITE
  const textColor = isDark ? COLOR_WHITE : COLOR_BLACK

  const data = {
    appearAnimationDuration: 500,
    background,
    title: {
      text: 'What\'s New',
      color: textColor,
      size: 35
    },
    items: [
      {
        title: {
          text: 'Easy setup',
          color: textColor,
          size: 18
        },
        subtitle: {
          text: 'The simple and typesafe WhatsNew struct enables you to structurize your awesome new app features',
          color: textColor,
          size: 15
        },
        image: {
          component: <Icon name="rocket" size={30} color={tintColor} />,
          // component: <Image source={require('./assets/icons8-approval-100.png')} style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, tintColor: COLOR }}/>,
          size: IMAGE_SIZE
        }
      },
      {
        title: {
          text: 'Themes',
          color: textColor,
          size: 18
        },
        subtitle: {
          text: 'You can apply different themes to perfectly match with your existing app design',
          color: textColor,
          size: 15
        },
        image: {
          component: <Image
                      source={require('./assets/icons8-picture-100.png')}
                      style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, tintColor }}
                    />,
          size: IMAGE_SIZE
        }
      },
      {
        title: {
          text: 'Installation',
          color: textColor,
          size: 18
        },
        subtitle: {
          text: 'You can install WhatsNewKit via CocoaPods and Carthage',
          color: textColor,
          size: 15
        },
        image: {
          component: <Image source={require('./assets/icons8-puzzle-100.png')} style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, tintColor }}/>,
          size: IMAGE_SIZE
        }
      },
      {
        title: {
          text: 'Open Source',
          color: textColor,
          size: 18
        },
        subtitle: {
          text: 'Contributions are very welcome 👨‍💻',
          color: textColor,
          size: 15
        },
        image: {
          component: <Image source={require('./assets/icons8-github-100.png')} style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, tintColor }}/>,
          size: IMAGE_SIZE
        }
      }
    ],
    detailButton: {
      text: 'Read more',
      color: tintColor,
      size: 17
    },
    completionButton: {
      text: 'Continue',
      color: 'white',
      background: tintColor,
      size: 17
    }
  }

  const onDetailButtonPress = () => {
    Linking.openURL('https://google.com')
  }

  const onCompletionButtonPress = () => {
    setVisible(!visible)
  }

  const show = (anim) => {
    setTintColor(TINT_COLORS[currentColorIndex])
    setAnimation(anim)
    setVisible(!visible)

    currentColorIndex = currentColorIndex === TINT_COLORS.length - 1 ? 0 : currentColorIndex + 1
  }

  const appear = (anim) => {
    setTintColor(TINT_COLORS[currentColorIndex])
    setAppearAnimation(anim)
    setVisible(!visible)

    currentColorIndex = currentColorIndex === TINT_COLORS.length - 1 ? 0 : currentColorIndex + 1
  }

  const changeAlignment = (alignment) => {
    setAlign(alignment)
    setTintColor(TINT_COLORS[currentColorIndex])
    setVisible(!visible)

    currentColorIndex = currentColorIndex === TINT_COLORS.length - 1 ? 0 : currentColorIndex + 1
  }

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#aaa' : '#ddd' }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={background} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginRight: 10, color: textColor }}>Dark mode</Text>
        <Switch
          onValueChange={() => setIsDark(!isDark)}
          value={isDark}
        />
      </View>
      <Button
        title={'Fade'}
        onPress={() => show('fade')}
      />
      <Button
        title={'Slide up'}
        onPress={() => show('slide-up')}
      />
      <Button
        title={'Slide down'}
        onPress={() => show('slide-down')}
      />
      <Button
        title={'Slide right'}
        onPress={() => show('slide-right')}
      />
      <Button
        title={'Slide left'}
        onPress={() => show('slide-left')}
      />
      <Button
        title={'Appear Fade'}
        onPress={() => appear('fade')}
      />
      <Button
        title={'Appear Slide'}
        onPress={() => appear('slide')}
      />
      <Button
        title={'Align center'}
        onPress={() => changeAlignment('center')}
      />
      <NewFeature
        visible={visible}
        appearAnimation={appearAnimation}
        appearAnimationDuration={data.appearAnimationDuration}
        contentAlignment={align}
        animation={animation}
        background={data.background}
        title={data.title}
        items={data.items}
        detailButton={{
          ...data.detailButton,
          handler: onDetailButtonPress
        }}
        completionButton={{
          ...data.completionButton,
          handler: onCompletionButtonPress
        }}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
