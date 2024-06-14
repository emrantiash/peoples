import commonStyle from "@/app/components/style/Styles";

const styles = {
    conatiner : {
        marginTop  : 20 ,
        height : '100vh'
    },
    title : {
        width : '6%',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    buttonGroups : {
        width : '100%',
        // backgroundColor : commonStyle.color.basicColor,
        marginTop :  20,
        display : 'flex',
        flexDirction : 'row',
        justifyContent : 'space-between'

    },
    mainBody :{
        // backgroundColor : 'red',
        display : 'flex',
        marginTop :  20,
        // justifyContent : 'center',
        alignItems : 'flex-start'
    },
    insideMainBody : {
        backgroundColor : commonStyle.color.gray,
        width : 400,
        margin  : 10,
        padding :  40,
        borderRadius :  10,
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
       }
}

export default styles ; 