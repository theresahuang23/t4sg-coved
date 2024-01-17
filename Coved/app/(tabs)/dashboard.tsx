import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Image, Button } from 'react-native';



export default function DashboardScreen() {
   
    return (
        
        <View style={styles.container}>
            {/* Welcome text */}
            <Text style={styles.title}>Dashboard</Text>
            <Text style={styles.welcomeText}>Welcome!</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            {/* Matched with section */}
            <View style={styles.matchContainer}>
                <Text style={styles.matchText}>You are matched with </Text>
                <Text style={[styles.matchText, styles.boldText]}>XXXX</Text>
                <Image 
                    source={require('../../../Coved/assets/images/matched.png')}
                    style={styles.image}
                />
            </View>
             {/* Confirm Service Hours Button */}
             <View style={styles.buttonWrapper}>
                <Button 
                    title="Confirm Service Hours" 
                    onPress={() => {}} 
                    color="#007bff"
                />
            </View>

            {/* Resources Button */}
            <View style={styles.buttonWrapper}>
                <Button 
                    title="Resources" 
                    onPress={() => {}} 
                    color="#007bff"
                />
            </View>
            {/* <EditScreenInfo path="app/(tabs)/dashboard.tsx" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', // Changed from 'center' to 'flex-start'
        paddingTop: 20, // Add some padding at the top
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 30, // Space below the welcome text
        marginBottom: 10, // Space below the welcome text
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    matchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    matchText: {
        fontSize: 18,
    },
    boldText: {
        fontWeight: 'bold',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25, // Circular image
        marginLeft: 10,
    },
    buttonWrapper: {
        marginTop: 20, 
        marginBottom: 20, 
    },
});
