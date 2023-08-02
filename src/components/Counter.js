import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { Fab } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { incrementCount, decrementCount } from '../actions/counter_action';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        count: state.counterReducer.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(incrementCount()),
        decrement: () => dispatch(decrementCount()),
    };
}

class Counter extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.counterMainContainer}>
                    <View style={styles.counterContainer}>
                        <Text style={styles.textStyle}>{this.props.count}</Text>
                    </View>
                </View>

                <View>
                    <Fab
                        placement="bottom-right"
                        colorScheme="blue"
                        size="lg"
                        icon={<MaterialCommunityIcons name="minus" size={26} color="white" />}
                        onPress={this.props.decrement}
                    />
                    <Fab
                        placement="bottom-left"
                        colorScheme="blue"
                        size="lg"
                        icon={<MaterialCommunityIcons name="plus" size={26} color="white" />}
                        onPress={this.props.increment}
                    />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        alignSelf: 'center'
    },

    counterMainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    counterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 100,

    },
    textStyle: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold'

    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter);