import * as base from './base';
export const commonStyles = {
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: base.bgColor.gray,
  },

  block: {
    block: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginBottom: 8,
      backgroundColor: base.bgColor.white,
    },
    headerMain: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    mainTitle: {
      fontSize: base.font.sm,
      color: base.textColor.primary,
      fontWeight: '600'
    },
    mainTitleLink: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    linkText: {
      fontSize: base.font.xs,
      color: base.textColor.blackSecondary
    },
    linkIcon: {
      marginLeft: 4,
    },
    headerSub: {
      marginTop: 4,
    },
    subTitle: {
      fontSize: base.font.xs,
      color: base.textColor.secondary,
    },

    blockContent: {
      marginTop: 16
    }
  }
}