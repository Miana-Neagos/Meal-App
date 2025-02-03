import {StyleSheet, Text, View, FlatList} from 'react-native';

type ListProp = {
    data?: string[],
}
const List:React.FC<ListProp> = ({data}) => {
    return (
        <View>
            <FlatList data={data} keyExtractor={(item, index) => index.toString()} scrollEnabled={false} renderItem={({item}) => (
                <View style={styles.listContainer}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listItem}>{item}</Text>
                </View>
            )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
      },
      bullet: {
        fontSize: 16,
        marginRight: 5,
      },
      listItem: {
        fontSize: 16,
        marginVertical: 5,
      },
})

export default List;