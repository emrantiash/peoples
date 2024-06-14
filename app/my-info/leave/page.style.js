import commonStyle from "@/app/components/style/Styles";

const styles = {
    constainer : {
       
        marginTop : 20 ,
         height : '220vh'
    },
    headingTitle : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginRight :  20
    },
    keepGap : {
        // backgroundColor : 'red',
        marginTop :  10,
        height :  60,
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between'
    },
    daysCount : {
        color : commonStyle.color.green
    },
    barHeight : { 
        height: 2
    }
}

export default styles;