import { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function MataKuliah() {

const [kode,setKode] = useState("");
const [nama,setNama] = useState("");
const [sks,setSks] = useState("");

const [data,setData] = useState<any[]>([]);
const [editIndex,setEditIndex] = useState<number | null>(null);

const simpanData = () => {

if(kode === "" || nama === "" || sks === ""){
alert("Data belum lengkap");
return;
}

if(editIndex !== null){

const update = [...data];

update[editIndex] = {
kode,
nama,
sks
};

setData(update);
setEditIndex(null);

}else{

setData([
...data,
{
kode,
nama,
sks
}
]);

}

setKode("");
setNama("");
setSks("");

};

const editData = (index:number)=>{

setKode(data[index].kode);
setNama(data[index].nama);
setSks(data[index].sks);

setEditIndex(index);

};

const hapusData = (index:number)=>{

const hapus = data.filter((_,i)=> i !== index);
setData(hapus);

};

return(

<View style={styles.container}>

<Text style={styles.title}>Data Mata Kuliah</Text>

{/* FORM */}

<View style={styles.formCard}>

<TextInput
placeholder="Kode Mata Kuliah"
style={styles.input}
value={kode}
onChangeText={setKode}
/>

<TextInput
placeholder="Nama Mata Kuliah"
style={styles.input}
value={nama}
onChangeText={setNama}
/>

<TextInput
placeholder="Jumlah SKS"
style={styles.input}
value={sks}
onChangeText={setSks}
/>

<TouchableOpacity
style={styles.button}
onPress={simpanData}
>

<Text style={styles.buttonText}>
{editIndex !== null ? "Update Data" : "Simpan Data"}
</Text>

</TouchableOpacity>

</View>

{/* LIST DATA */}

<FlatList
data={data}
keyExtractor={(item,index)=>index.toString()}
renderItem={({item,index})=>(

<View style={styles.card}>

<Text style={styles.nama}>{item.nama}</Text>

<Text style={styles.info}>Kode : {item.kode}</Text>
<Text style={styles.info}>SKS : {item.sks}</Text>

<View style={styles.actionRow}>

<TouchableOpacity
style={styles.editButton}
onPress={()=>editData(index)}
>
<Text style={styles.actionText}>Edit</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.deleteButton}
onPress={()=>hapusData(index)}
>
<Text style={styles.actionText}>Hapus</Text>
</TouchableOpacity>

</View>

</View>

)}
/>

</View>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f3f4f6",
padding:20
},

title:{
fontSize:26,
fontWeight:"bold",
marginBottom:20
},

formCard:{
backgroundColor:"white",
padding:20,
borderRadius:14,
marginBottom:20,

shadowColor:"#000",
shadowOpacity:0.08,
shadowRadius:6,
shadowOffset:{width:0,height:4},
elevation:4
},

input:{
borderWidth:1,
borderColor:"#ddd",
padding:12,
borderRadius:8,
marginBottom:10
},

button:{
backgroundColor:"#2563eb",
padding:14,
borderRadius:10
},

buttonText:{
color:"white",
textAlign:"center",
fontWeight:"bold"
},

card:{
backgroundColor:"white",
padding:18,
borderRadius:14,
marginBottom:15,

shadowColor:"#000",
shadowOpacity:0.08,
shadowRadius:6,
shadowOffset:{width:0,height:4},
elevation:4
},

nama:{
fontSize:18,
fontWeight:"bold",
marginBottom:6
},

info:{
fontSize:14,
color:"#555",
marginBottom:2
},

actionRow:{
flexDirection:"row",
marginTop:12
},

editButton:{
backgroundColor:"#f59e0b",
padding:10,
borderRadius:8,
marginRight:10,
flex:1
},

deleteButton:{
backgroundColor:"#ef4444",
padding:10,
borderRadius:8,
flex:1
},

actionText:{
color:"white",
textAlign:"center",
fontWeight:"bold"
}

});