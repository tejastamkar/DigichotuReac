import * as React from 'react'
import { View , Text} from 'react-native'

export default function ProfileScreen({navgiation}){

    return(
        <View styles={{flex:1 , alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={()=>navgiation.navgiate('Home')} style={{fontSize:26 , fontWeight:'bold'}} >
                Profile Screen 
            </Text>
        </View>
    );
}