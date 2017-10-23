import * as base from './base';
export const blockStyle = {
  block: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
    backgroundColor: base.bgColor.white,
  },
  headerMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainTitle: {
    fontSize: base.font.md,
    color: base.textColor.primary
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