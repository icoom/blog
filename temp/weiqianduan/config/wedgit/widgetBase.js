import {proxy} from "ajax-hook";
proxy({
  //请求发起前进入
  onRequest: (config, handler) => {
      console.log(config.url)
      handler.next(config);
  },
  //请求发生错误时进入，比如超时；注意，不包括http状态码错误，如404仍然会认为请求成功
  onError: (err, handler) => {
      console.log(err.type)
      handler.next(err)
  },
  //请求成功后进入
  onResponse: (response, handler) => {
      console.log(response.response)
      handler.next(response)
  }
})

module.exports = {
    props: ['contextPath'],
    data () {
        return {
            routes: {}
        };
    },
    methods: {
       l (path) {
            let hasHost = this.contextPath ? this.contextPath.match(/https{0,1}:\/\/[\d\w.:]+(\/#)*/) : false;
            //if(!this.contextPath || !this.contextPath.match(/https{0,1}:\/\/[\d\w.:]+(\/#)*/)) return path;
            let host = hasHost ? hasHost[0] : '';
            if(/^\//.test(path)) {
              return host + path;
            } else {
              // 相对路径组件地址处理
            }
        },
    }
};
