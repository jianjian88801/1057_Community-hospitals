const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootf5kdg/",
            name: "springbootf5kdg",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootf5kdg/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "社区医院信息平台"
        } 
    }
}
export default base
