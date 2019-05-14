/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//  import packages
import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

// import custom files
import Welcome from './Welcome';

// constants
const slides = [
	{
		key: 'somethun',
		title: 'Title 1',
		text: 'Description.\nSay something cool',
		// image: require('./assets/1.jpg'),
		backgroundColor: '#59b2ab',
	},
	{
		key: 'somethun-dos',
		title: 'Title 2',
		text: 'Other cool stuff',
		// image: require('./assets/2.jpg'),
		backgroundColor: '#febe29',
	},
	{
		key: 'somethun1',
		title: 'Rocket guy',
		text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
		// image: require('./assets/3.jpg'),
		backgroundColor: '#22bcb5',
	}
];

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showRealApp: false
		}
	}
	_renderItem = (item) => {
		return (
			<View style={styles.slide}>
				<Text style={styles.title}>{item.title}</Text>
				<Image source={item.image} />
				<Text style={style.text}>{item.text}</Text>
			</View>
		);
	}
	onDone = () => {
		// User finished the introduction. Show real app through
		// navigation or simply by controlling state
		App.setState({ showRealApp: true }, () => console.warn(App.state.showRealApp));
	}
	render() {
		if (this.state.showRealApp) {
			return <Welcome />;
		} else {
			return <AppIntroSlider renderItem={App._renderItem} slides={slides} onDone={App.onDone} />;
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
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
