//�����ӡһЩ������Ϣ
var debug=require('debug');
console.log(process.env.DEBUG)
var loggerServer=debug('logger:server');
/**
 * ���Դι����ڿ���̨�����־
 * �����ʱ�� ���ô���־��¼�������ֺͻ��������е�DEBUGֵ���бȽ� �����ͬ-
 */
loggerServer('server');
var loggerClient=debug('logger:client');
loggerClient('client');