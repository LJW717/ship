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
    maxlength: 50
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
    maxlength: 11
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
    maxlength: 20
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
    maxlength: 20
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
    maxlength: 20
  }
]
