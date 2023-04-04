import Mock from 'mockjs';

Mock.mock('/api/user', {
  'code': 0,
  'message': 'success',
  'data': {
    'id': '@id',
    'name': '@cname',
    'age|18-60': 1,
    'gender|1': ['男', '女']
  }
});

Mock.mock('/api/user/list', {
  'code': 0,
  'message': 'success',
  'data|10': [
    {
      'id': '@id',
      'name': '@cname',
      'age|18-60': 1,
      'gender|1': ['男', '女']
    }
  ]
});