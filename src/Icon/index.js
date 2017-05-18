/* eslint-disable import/no-unresolved, import/extensions */
import VectorIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoVectorIcon from 'react-native-vector-icons/Entypo';
import EvilIconsVectorIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesomeVectorIcon from 'react-native-vector-icons/FontAwesome';
import FoundationVectorIcon from 'react-native-vector-icons/Foundation';
import IoniconsVectorIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsVectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonsVectorIcon from 'react-native-vector-icons/Octicons';
import ZocialVectorIcon from 'react-native-vector-icons/Zocial';
import SimpleLineIconsVectorIcon from 'react-native-vector-icons/SimpleLineIcons';
import React, { PureComponent, PropTypes } from 'react';
/* eslint-enable import/no-unresolved, import/extensions */

const propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    size: PropTypes.number,
    color: PropTypes.string,
};
const defaultProps = { };
const contextTypes = {
    uiTheme: PropTypes.object.isRequired,
};

class Icon extends PureComponent {
    render() {
        const { name, style, size, color } = this.props;
        const { palette, spacing } = this.context.uiTheme;

        const iconColor = color || palette.secondaryTextColor;
        const iconSize = size || spacing.iconSize;

        let iconSetName = ''
        let iconName = ''
        if (name.indexOf('/') === -1) {
            iconSetName = 'MaterialIcons'
            iconName = name
        } else {
            const splitted = name.split('/')
            iconSetName = splitted[0]
            iconName = splitted[1]
        }

        let view = null
        if (iconSetName === 'MaterialIcons') {
            view = <VectorIcon
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={style}
            />
        } else if (iconSetName === 'Entypo') {
            view = <EntypoVectorIcon
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={style}
            />
        } else if (iconSetName === 'EvilIcons') {
            view = <EvilIconsVectorIcon
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={style}
            />
        } else if (iconSetName === 'FontAwesome') {
            view = <FontAwesomeVectorIcon
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={style}
            />
        } else if (iconSetName === 'Foundation') {
            view = <FoundationVectorIcon
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={style}
            />
        } else if (iconSetName === 'Ionicons') {
            view = <IoniconsVectorIcon
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={style}
            />
        } else if (iconSetName === 'MaterialCommunityIcons') {
            view = <MaterialCommunityIconsVectorIcon
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={style}
            />
        } else if (iconSetName === 'Octicons') {
            view = <OcticonsVectorIcon
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={style}
            />
        } else if (iconSetName === 'Zocial') {
            view = <ZocialVectorIcon
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={style}
            />
        } else if (iconSetName === 'SimpleLineIcons') {
            view = <SimpleLineIconsVectorIcon
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={style}
            />
        }

        return view
    }
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
Icon.contextTypes = contextTypes;

export default Icon;
