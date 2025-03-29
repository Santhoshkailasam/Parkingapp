import React from "react";
import Bookingcomponent from "../component/Bookingcomponent";
import { SafeAreaView, StyleSheet, View, Text, TextInput, Dimensions } from "react-native";
import Search from "../assets/icon/search.svg";

const Parking = () => {
    const { width, height } = Dimensions.get("window"); // Get screen width and height dynamically

    return (
        <SafeAreaView style={styles.mainContainer}>
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.text, { fontSize: width * 0.05 }]}>Saved Parkings</Text>
                </View>
                <View style={[styles.searchBox, { height: height * 0.07, width: width * 0.84 }]}>
                    <View style={{ flexDirection: "row" }}>
                        <Search style={{ marginLeft: width * 0.05, marginTop: 10 }} />
                        <TextInput
                            style={{
                                marginLeft: width * 0.1,
                                fontSize: width * 0.05,
                                height: height * 0.07,
                                width: "100%", // Adjust width dynamically
                                borderRadius: 50,
                            }}
                            placeholder="Search Parking"
                            placeholderTextColor="#D0CBCB70"
                            selectionColor="#D0CBCB70"
                        />
                    </View>
                </View>
            </SafeAreaView>
            <Bookingcomponent image={require("../assets/image/tcscarparking.jpeg")} Text="Tech Car Parking" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#000000",
        flex: 1,
    },
    container: {
        padding: 10,
    },
    text: {
        marginLeft: 95,
        marginTop: 10,
        fontWeight: "bold",
        color: "white",
        fontFamily: "Songmyung",
    },
    searchBox: {
        backgroundColor: "#D6D1CA52",
        borderRadius: 50,
        marginLeft: 15,
        marginTop: 30,
    },
});

export default Parking;
