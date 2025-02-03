import {StyleSheet, Text, View, FlatList} from 'react-native';
import { colorTheme } from '../../colorTheme';

type ListProp = {
    data?: string[],
}
const List:React.FC<ListProp> = ({data}) => {
    return (
        // <View>
            <FlatList data={data} keyExtractor={(item, index) => index.toString()} scrollEnabled={false} renderItem={({item}) => (
                <View style={styles.listContainer}>
                    {/* <Text style={styles.bullet}>•</Text> */}
                    <Text style={styles.listItem}>{item}</Text>
                </View>
            )}/>
        // </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        paddingHorizontal: 12,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: colorTheme.colorLightGrey,
        // elevation: 2,
        // shadowColor: "#000", 
        // shadowOffset: { width: 0, height: 4 }, 
        // shadowOpacity: 0.3, 
        // shadowRadius: 4,
      },
    //   bullet: {
    //     fontSize: 16,
    //     marginRight: 5,
    //     color: colorTheme.colorGrey,
    //   },
      listItem: {
        fontSize: 16,
        marginVertical: 5,
        marginHorizontal: 6,
      },
})

export default List;