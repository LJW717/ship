// 个人中心
export const homelist = [
  {
    id: 1,
    title: '个人资料',
    iconClass: '',
    isInput: false,
    canShow: true,
    iconmore: true,
    titleIcon: 'icongerenziliao'
  },
  {
    id: 2,
    title: '修改密码',
    iconClass: '',
    isInput: false,
    canShow: true,
    iconmore: true,
    titleIcon: 'iconxiugaimima'
  },
  {
    id: 3,
    title: '船舶管理',
    iconClass: '',
    isInput: false,
    canShow: true,
    iconmore: true,
    titleIcon: 'iconchuanbo'
  },
  {
    id: 4,
    title: '用户管理',
    iconClass: '',
    isInput: false,
    canShow: true,
    iconmore: true,
    titleIcon: 'iconyonghuguanli'
  }
]

// 个人资料
export const userOps = [
  {
    id: 1,
    title: '姓名：',
    iconClass: '',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    value: '马化腾',
    maxlength: 10
  },
  {
    id: 2,
    title: '性别：',
    iconClass: '',
    isInput: false,
    canShow: true,
    iconmore: false,
    readonly: true,
    value: '',
    maxlength: 2,
    isSlot: true
  },
  {
    id: 3,
    title: '电子邮箱：',
    iconClass: '',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: true,
    value: 'mahuaten@tuhu.cn',
    maxlength: 50,
    inputtype: 'text'
  },
  {
    id: 4,
    title: '电话：',
    iconClass: '',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: true,
    value: '18888888888',
    maxlength: 11,
    inputtype: 'number'
  },
  {
    id: 5,
    title: '所属部门：',
    iconClass: '',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: true,
    value: '腾讯总部董事会',
    maxlength: 50
  },
  {
    id: 6,
    title: '登录用户名：',
    iconClass: '',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: true,
    value: 'mahuaten',
    maxlength: 20
  },
  {
    id: 7,
    title: '角色类型：',
    iconClass: '',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: true,
    value: '管理员',
    maxlength: 20
  }
]

// 修改密码
export const passwords = [
  {
    id: 1,
    title: '旧密码：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '请输入旧密码',
    value: '',
    maxlength: 20,
    password: true
  },
  {
    id: 2,
    title: '新密码：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '请输入新密码',
    value: '',
    maxlength: 20,
    password: true
  },
  {
    id: 3,
    title: '确认密码：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '请再次输入新密码',
    value: '',
    maxlength: 20,
    password: true
  }
]

// 鱼类资源
export const fishType = [
  {
    id: 1,
    title: '种类：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '鱼种',
    value: '',
    maxlength: 20
  },
  {
    id: 2,
    title: '数量：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '单位:尾',
    value: '',
    maxlength: 20,
    inputtype: 'number'
  },
  {
    id: 3,
    title: '重量：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '单位:kg',
    value: '',
    maxlength: 20,
    inputtype: 'digit'
  },
  {
    id: 4,
    title: '记录人：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '请输入旧密码',
    value: '马化腾',
    maxlength: 20
  },
  {
    id: 5,
    title: '记录时间：',
    isInput: false,
    canShow: true,
    iconmore: false,
    readonly: false,
    value: '',
    maxlength: 20
  }
]

// 早期资源
export const initType = [
  {
    id: 1,
    title: '鱼卵数：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '单位:粒',
    value: '',
    maxlength: 10,
    inputtype: 'number'
  },
  {
    id: 2,
    title: '鱼苗数：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '单位:尾',
    value: '',
    maxlength: 10,
    inputtype: 'number'
  },
  {
    id: 3,
    title: '采集网次：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '单位:次',
    value: '',
    maxlength: 10,
    inputtype: 'number'
  },
  {
    id: 4,
    title: '单位采集网次时间：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '单位:分钟',
    value: '',
    maxlength: 10,
    inputtype: 'number'
  },
  {
    id: 5,
    title: '记录人：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '',
    value: '马化腾',
    maxlength: 20
  },
  {
    id: 6,
    title: '记录时间：',
    isInput: false,
    canShow: true,
    iconmore: false,
    readonly: false,
    value: '',
    maxlength: 20
  }
]

// 环境生物
export const environmentType = [
  {
    id: 1,
    title: '水质因子：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '',
    value: '',
    maxlength: 10
  },
  {
    id: 2,
    title: '浮游植物：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '',
    value: '',
    maxlength: 100
  },
  {
    id: 3,
    title: '浮游动物：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '',
    value: '',
    maxlength: 100
  },
  {
    id: 4,
    title: '低栖动物：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '',
    value: '',
    maxlength: 100
  },
  {
    id: 5,
    title: '周丛生物：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '',
    value: '',
    maxlength: 100
  },
  {
    id: 6,
    title: '漂浮生物：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '',
    value: '',
    maxlength: 100
  },
  {
    id: 7,
    title: '水生植物：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '',
    value: '',
    maxlength: 100
  },
  {
    id: 8,
    title: '记录人：',
    isInput: true,
    canShow: true,
    iconmore: false,
    readonly: false,
    placeholder: '',
    value: '马化腾',
    maxlength: 20
  },
  {
    id: 9,
    title: '记录时间：',
    isInput: false,
    canShow: true,
    iconmore: false,
    readonly: false,
    value: '',
    maxlength: 20
  }
]

export const points = [
  {longitude: 118.793425, latitude: 32.040599},
  {longitude: 118.793657, latitude: 32.042257},
  {longitude: 118.79397, latitude: 32.044788},
  {longitude: 118.794106, latitude: 32.045703},
  {longitude: 118.795121, latitude: 32.051495},
  {longitude: 118.795498, latitude: 32.054086},
  {longitude: 118.794785, latitude: 32.05424},
  {longitude: 118.794091, latitude: 32.054978},
  {longitude: 118.793609, latitude: 32.055507},
  {longitude: 118.793609, latitude: 32.055507},
  {longitude: 118.793539, latitude: 32.056249},
  {longitude: 118.793545, latitude: 32.057455},
  {longitude: 118.79355, latitude: 32.058501},
  {longitude: 118.793725, latitude: 32.060881},
  {longitude: 118.793627, latitude: 32.062018},
  {longitude: 118.793468, latitude: 32.063023},
  {longitude: 118.793439, latitude: 32.064643},
  {longitude: 118.793439, latitude: 32.064643},
  {longitude: 118.793446, latitude: 32.065729},
  {longitude: 118.793285, latitude: 32.066237},
  {longitude: 118.793301, latitude: 32.06777},
  {longitude: 118.793008, latitude: 32.069068},
  {longitude: 118.792519, latitude: 32.07109},
  {longitude: 118.792463, latitude: 32.071158},
  {longitude: 118.790412, latitude: 32.071002},
  {longitude: 118.790475, latitude: 32.075661},
  {longitude: 118.790529, latitude: 32.075669},
  {longitude: 118.788423, latitude: 32.075515},
  {longitude: 118.784155, latitude: 32.07529},
  {longitude: 118.779441, latitude: 32.07462},
  {longitude: 118.779419, latitude: 32.074451},
  {longitude: 118.778518, latitude: 32.073691},
  {longitude: 118.775614, latitude: 32.071318},
  {longitude: 118.775614, latitude: 32.071318},
  {longitude: 118.775614, latitude: 32.071318},
  {longitude: 118.775614, latitude: 32.071318},
  {longitude: 118.775614, latitude: 32.071318},
  {longitude: 118.775614, latitude: 32.071318},
  {longitude: 118.779374, latitude: 32.070302},
  {longitude: 118.781976, latitude: 32.070475},
  {longitude: 118.783634, latitude: 32.070624},
  {longitude: 118.78357, latitude: 32.070605},
  {longitude: 118.78357, latitude: 32.070605},
  {longitude: 118.781428, latitude: 32.068593},
  {longitude: 118.781043, latitude: 32.067963},
  {longitude: 118.781125, latitude: 32.06662},
  {longitude: 118.781166, latitude: 32.065189},
  {longitude: 118.781111, latitude: 32.065235},
  {longitude: 118.780806, latitude: 32.063765},
  {longitude: 118.78078, latitude: 32.063004},
  {longitude: 118.780471, latitude: 32.061686},
  {longitude: 118.780424, latitude: 32.060799},
  {longitude: 118.7811, latitude: 32.058792},
  {longitude: 118.783699, latitude: 32.052875},
  {longitude: 118.783016, latitude: 32.049863},
  {longitude: 118.782521, latitude: 32.048316},
  {longitude: 118.782752, latitude: 32.048139},
  {longitude: 118.781795, latitude: 32.0457},
  {longitude: 118.781455, latitude: 32.044001},
  {longitude: 118.782159, latitude: 32.043738},
  {longitude: 118.783104, latitude: 32.043415},
  {longitude: 118.78473, latitude: 32.042774},
  {longitude: 118.787236, latitude: 32.041789},
  {longitude: 118.787908, latitude: 32.041509},
  {longitude: 118.788904, latitude: 32.04132},
  {longitude: 118.789006, latitude: 32.04137},
  {longitude: 118.789658, latitude: 32.041283},
  {longitude: 118.790465, latitude: 32.041158},
  {longitude: 118.790577, latitude: 32.04114},
  {longitude: 118.791326, latitude: 32.040995},
  {longitude: 118.793425, latitude: 32.040599}
]
