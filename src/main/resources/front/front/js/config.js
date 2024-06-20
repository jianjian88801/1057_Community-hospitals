
var projectName = '社区医院信息平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '检查结果',
	url: './pages/jianchajieguo/list.html'
}, 
{
	name: '诊断信息',
	url: './pages/zhenduanxinxi/list.html'
}, 
{
	name: '取药列表',
	url: './pages/quyaoliebiao/list.html'
}, 
{
	name: '药费结算',
	url: './pages/yaofeijiesuan/list.html'
}, 

]

var adminurl =  "http://localhost:8080/springbootf5kdg/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"患者","menuJump":"列表","tableName":"huanzhe"}],"menu":"患者管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"护士","menuJump":"列表","tableName":"hushi"}],"menu":"护士管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医生","menuJump":"列表","tableName":"yisheng"}],"menu":"医生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"药品管理员","menuJump":"列表","tableName":"yaopinguanliyuan"}],"menu":"药品管理员管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"检查结果列表","menuJump":"列表","tableName":"jianchajieguo"}],"menu":"检查结果模块"},{"child":[{"buttons":["查看"],"menu":"诊断信息列表","menuJump":"列表","tableName":"zhenduanxinxi"}],"menu":"诊断信息模块"},{"child":[{"buttons":["查看"],"menu":"取药列表列表","menuJump":"列表","tableName":"quyaoliebiao"}],"menu":"取药列表模块"},{"child":[{"buttons":["查看","支付"],"menu":"药费结算列表","menuJump":"列表","tableName":"yaofeijiesuan"}],"menu":"药费结算模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"检查结果","menuJump":"列表","tableName":"jianchajieguo"}],"menu":"检查结果管理"},{"child":[{"buttons":["查看"],"menu":"诊断信息","menuJump":"列表","tableName":"zhenduanxinxi"}],"menu":"诊断信息管理"},{"child":[{"buttons":["查看"],"menu":"取药列表","menuJump":"列表","tableName":"quyaoliebiao"}],"menu":"取药列表管理"},{"child":[{"buttons":["查看","支付"],"menu":"药费结算","menuJump":"列表","tableName":"yaofeijiesuan"}],"menu":"药费结算管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"检查结果列表","menuJump":"列表","tableName":"jianchajieguo"}],"menu":"检查结果模块"},{"child":[{"buttons":["查看"],"menu":"诊断信息列表","menuJump":"列表","tableName":"zhenduanxinxi"}],"menu":"诊断信息模块"},{"child":[{"buttons":["查看"],"menu":"取药列表列表","menuJump":"列表","tableName":"quyaoliebiao"}],"menu":"取药列表模块"},{"child":[{"buttons":["查看","支付"],"menu":"药费结算列表","menuJump":"列表","tableName":"yaofeijiesuan"}],"menu":"药费结算模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"患者","tableName":"huanzhe"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"患者","menuJump":"列表","tableName":"huanzhe"}],"menu":"患者管理"},{"child":[{"buttons":["查看","检查","删除"],"menu":"待检查列表","menuJump":"列表","tableName":"daijianchaliebiao"}],"menu":"待检查列表管理"},{"child":[{"buttons":["查看","删除","修改"],"menu":"检查结果","menuJump":"列表","tableName":"jianchajieguo"}],"menu":"检查结果管理"},{"child":[{"buttons":["查看","完成","删除"],"menu":"注射列表","menuJump":"列表","tableName":"zhusheliebiao"}],"menu":"注射列表管理"},{"child":[{"buttons":["查看","删除"],"menu":"完成注射列表","menuJump":"列表","tableName":"wanchengzhusheliebiao"}],"menu":"完成注射列表管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"检查结果列表","menuJump":"列表","tableName":"jianchajieguo"}],"menu":"检查结果模块"},{"child":[{"buttons":["查看"],"menu":"诊断信息列表","menuJump":"列表","tableName":"zhenduanxinxi"}],"menu":"诊断信息模块"},{"child":[{"buttons":["查看"],"menu":"取药列表列表","menuJump":"列表","tableName":"quyaoliebiao"}],"menu":"取药列表模块"},{"child":[{"buttons":["查看","支付"],"menu":"药费结算列表","menuJump":"列表","tableName":"yaofeijiesuan"}],"menu":"药费结算模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"护士","tableName":"hushi"},{"backMenu":[{"child":[{"buttons":["查看","新增","修改","删除","安排检查"],"menu":"患者","menuJump":"列表","tableName":"huanzhe"}],"menu":"患者管理"},{"child":[{"buttons":["查看","诊断"],"menu":"检查结果","menuJump":"列表","tableName":"jianchajieguo"}],"menu":"检查结果管理"},{"child":[{"buttons":["查看","修改","删除","安排注射"],"menu":"诊断信息","menuJump":"列表","tableName":"zhenduanxinxi"}],"menu":"诊断信息管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"检查结果列表","menuJump":"列表","tableName":"jianchajieguo"}],"menu":"检查结果模块"},{"child":[{"buttons":["查看"],"menu":"诊断信息列表","menuJump":"列表","tableName":"zhenduanxinxi"}],"menu":"诊断信息模块"},{"child":[{"buttons":["查看"],"menu":"取药列表列表","menuJump":"列表","tableName":"quyaoliebiao"}],"menu":"取药列表模块"},{"child":[{"buttons":["查看","支付"],"menu":"药费结算列表","menuJump":"列表","tableName":"yaofeijiesuan"}],"menu":"药费结算模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"医生","tableName":"yisheng"},{"backMenu":[{"child":[{"buttons":["查看","安排取药"],"menu":"诊断信息","menuJump":"列表","tableName":"zhenduanxinxi"}],"menu":"诊断信息管理"},{"child":[{"buttons":["查看"],"menu":"注射列表","menuJump":"列表","tableName":"zhusheliebiao"}],"menu":"注射列表管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"药品信息","menuJump":"列表","tableName":"yaopinxinxi"}],"menu":"药品信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","药品入库"],"menu":"药品进价","menuJump":"列表","tableName":"yaopinjinjia"}],"menu":"药品进价管理"},{"child":[{"buttons":["查看","结算","删除","修改","新增"],"menu":"取药列表","menuJump":"列表","tableName":"quyaoliebiao"}],"menu":"取药列表管理"},{"child":[{"buttons":["查看","删除"],"menu":"药费结算","menuJump":"列表","tableName":"yaofeijiesuan"}],"menu":"药费结算管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"检查结果列表","menuJump":"列表","tableName":"jianchajieguo"}],"menu":"检查结果模块"},{"child":[{"buttons":["查看"],"menu":"诊断信息列表","menuJump":"列表","tableName":"zhenduanxinxi"}],"menu":"诊断信息模块"},{"child":[{"buttons":["查看"],"menu":"取药列表列表","menuJump":"列表","tableName":"quyaoliebiao"}],"menu":"取药列表模块"},{"child":[{"buttons":["查看","支付"],"menu":"药费结算列表","menuJump":"列表","tableName":"yaofeijiesuan"}],"menu":"药费结算模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"药品管理员","tableName":"yaopinguanliyuan"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
