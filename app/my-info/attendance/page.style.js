import commonStyle from "@/app/components/style/Styles";

const styles = {
    constainer : {
       
        marginTop : 20 ,
         height : '130vh'
    },
    dateFixed : {
        display : 'flex',
        justifyContent : 'space-around',
        alignItems : 'center',
        
        height :  50,
        width : 200,
        border : '1px solid #D7D7D7',
        borderRadius :  6 

    },
    cardModel : {
        marginTop :  30 
    },
    backgroundCard : {
        backgroundColor : commonStyle.color.green
    },
    summeryRoot : {
        display : 'flex',
        // justifyContent : 'center',
        alignItems : 'center'
    },
    summeryTitle : {
        marginLeft :  10 ,
        letterSpacing  : 0.5
    }
}

export default styles 