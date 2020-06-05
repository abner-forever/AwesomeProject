import { Dimensions, Platform } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
const ScreenWidth = width < height ? width : height
export default class StyleUtil {
    static pxToDpWidth(px) {
        // 设计图纸以750为基准
        return px / 750 * ScreenWidth
    }
}