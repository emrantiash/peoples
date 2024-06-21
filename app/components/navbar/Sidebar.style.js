import { Coming_Soon } from "next/font/google";
import commonStyle from "../style/Styles";

const styles = {
    brandColor : {
        color : commonStyle.color.brandColor
    },
    titleStyle : {
        color : 'black',
        fontFamily  : commonStyle.font.titleFont,
        fontSize : commonStyle.size.title
      },
    menuFont : {
        fontSize : commonStyle.size.menuFont,
        // fontFamily : commonStyle.font.fontFamily
    }
}

export default styles ;