export let getHome = () => {
  return {
    type: 'GET_HOME_DATA',
    service: () => { }
  }
}


// 在home container里调用：
//this.props.disptch(getHome())