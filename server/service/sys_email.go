package service

import (
	"gin-vue-devops/utils"
)

//@function: EmailTest
//@description: 发送邮件测试
//@return: err error

func EmailTest() (err error) {
	subject := "test111"
	body := "test111"
	err = utils.EmailTest(subject, body)
	return err
}
