import React from 'react';
import {
    View, Image, FlatList
} from 'react-native';
import styles from './styles';
import { IconButton, Text, Divider, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getRandomInt } from '../../helpers/random';
import { commonStyles } from '../commonStyles';

export default function ContactDetail({ navigation, route }) {

    const actions = [
        {
            icon: 'mail',
            name: 'Send message'
        },
        {
            icon: 'slash',
            name: 'Block user'
        },
        {
            icon: 'star',
            name: 'Mark as favourite'
        }
    ];

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={styles.topContainer}>
                <IconButton
                    icon="close"
                    size={25}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={{ uri: route.params.image }}
                    style={commonStyles.profileImage}
                />
                <Text style={commonStyles.profileNameText}>{route.params.name}</Text>
                <Button
                    style={{ marginTop: 10 }}
                    theme={{ roundness: 20 }}
                    icon="account-plus-outline"
                    mode="contained"
                    onPress={() => console.log('add to contact')}>
                    Add to contact
                </Button>
            </View>
            <View style={[commonStyles.infoContainer, { marginTop: 40 }]}>
                <Icon
                    name="phone"
                    size={20}
                    color="gray"
                />
                <Text style={styles.infoText}>XXXXXXXXXXXXX</Text>
            </View>
            <View style={[commonStyles.infoContainer, { marginTop: 20 }]}>
                <Icon
                    name="mail"
                    size={20}
                    color="gray"
                />
                <Text style={styles.infoText}>user@userdomain.com</Text>
            </View>
            <FlatList
                style={{ flex: 1, marginTop: 10 }}
                data={actions}
                ListHeaderComponent={() => {
                    return (
                        <Text style={commonStyles.headerText}>Options</Text>
                    )
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={[commonStyles.infoContainer, { paddingVertical: 15 }]}>
                            <Icon
                                name={item.icon}
                                color="gray"
                                size={16}
                            />
                            <Text style={commonStyles.listText}>{item.name}</Text>
                        </View>
                    )
                }}
                keyExtractor={() => String(getRandomInt(1000))}
                ItemSeparatorComponent={() => <Divider />}
            />
        </SafeAreaView>
    );
}