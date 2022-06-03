# 功能测试


**简介**:功能测试


**HOST**:127.0.0.1:7777


**联系人**:author


**Version**:1.0


**接口路径**:/v2/api-docs


[TOC]






# 全局相关接口


## 首页多格数据


**接口地址**:`/far/api/home/get-grid`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:参数->对象


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultData«Map«string,List«HomeDataVo»»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||array|HomeDataVo|
|&emsp;&emsp;color||string||
|&emsp;&emsp;jumpUrl||string||
|&emsp;&emsp;title||string||
|e||Exception|Exception|
|&emsp;&emsp;cause||Throwable|Throwable|
|&emsp;&emsp;&emsp;&emsp;cause|||false|Throwable|Throwable|
|&emsp;&emsp;&emsp;&emsp;localizedMessage|||false|string||
|&emsp;&emsp;&emsp;&emsp;message|||false|string||
|&emsp;&emsp;&emsp;&emsp;stackTrace|||false|array|StackTraceElement|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;className|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lineNumber|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;methodName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;nativeMethod|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;suppressed|||false|array|Throwable|
|&emsp;&emsp;localizedMessage||string||
|&emsp;&emsp;message||string||
|&emsp;&emsp;stackTrace||array|StackTraceElement|
|&emsp;&emsp;&emsp;&emsp;className|||false|string||
|&emsp;&emsp;&emsp;&emsp;fileName|||false|string||
|&emsp;&emsp;&emsp;&emsp;lineNumber|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;methodName|||false|string||
|&emsp;&emsp;&emsp;&emsp;nativeMethod|||false|boolean||
|&emsp;&emsp;suppressed||array|Throwable|
|&emsp;&emsp;&emsp;&emsp;cause|||false|Throwable|Throwable|
|&emsp;&emsp;&emsp;&emsp;localizedMessage|||false|string||
|&emsp;&emsp;&emsp;&emsp;message|||false|string||
|&emsp;&emsp;&emsp;&emsp;stackTrace|||false|array|StackTraceElement|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;className|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lineNumber|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;methodName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;nativeMethod|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;suppressed|||false|array|Throwable|
|msg||string||
|record||array||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"additionalProperties1": [
			{
				"color": "",
				"jumpUrl": "",
				"title": ""
			}
		]
	},
	"e": {
		"cause": {
			"cause": {
				"cause": {},
				"localizedMessage": "",
				"message": "",
				"stackTrace": [
					{
						"className": "",
						"fileName": "",
						"lineNumber": 0,
						"methodName": "",
						"nativeMethod": true
					}
				],
				"suppressed": [
					{}
				]
			},
			"localizedMessage": "",
			"message": "",
			"stackTrace": [
				{
					"className": "",
					"fileName": "",
					"lineNumber": 0,
					"methodName": "",
					"nativeMethod": true
				}
			],
			"suppressed": [
				{}
			]
		},
		"localizedMessage": "",
		"message": "",
		"stackTrace": [
			{
				"className": "",
				"fileName": "",
				"lineNumber": 0,
				"methodName": "",
				"nativeMethod": true
			}
		],
		"suppressed": [
			{
				"cause": {
					"cause": {},
					"localizedMessage": "",
					"message": "",
					"stackTrace": [
						{
							"className": "",
							"fileName": "",
							"lineNumber": 0,
							"methodName": "",
							"nativeMethod": true
						}
					],
					"suppressed": [
						{}
					]
				},
				"localizedMessage": "",
				"message": "",
				"stackTrace": [
					{
						"className": "",
						"fileName": "",
						"lineNumber": 0,
						"methodName": "",
						"nativeMethod": true
					}
				],
				"suppressed": [
					{}
				]
			}
		]
	},
	"msg": "",
	"record": []
}
```


# 测试


## testThread


**接口地址**:`/test/test`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`application/json`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultData«FarProductClass对象»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||FarProductClass对象|FarProductClass对象|
|&emsp;&emsp;clientId||integer(int64)||
|&emsp;&emsp;createAt||integer(int64)||
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;pid||integer(int64)||
|&emsp;&emsp;title||string||
|&emsp;&emsp;updateAt||integer(int64)||
|e||Exception|Exception|
|&emsp;&emsp;cause||Throwable|Throwable|
|&emsp;&emsp;&emsp;&emsp;cause|||false|Throwable|Throwable|
|&emsp;&emsp;&emsp;&emsp;localizedMessage|||false|string||
|&emsp;&emsp;&emsp;&emsp;message|||false|string||
|&emsp;&emsp;&emsp;&emsp;stackTrace|||false|array|StackTraceElement|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;className|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lineNumber|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;methodName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;nativeMethod|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;suppressed|||false|array|Throwable|
|&emsp;&emsp;localizedMessage||string||
|&emsp;&emsp;message||string||
|&emsp;&emsp;stackTrace||array|StackTraceElement|
|&emsp;&emsp;&emsp;&emsp;className|||false|string||
|&emsp;&emsp;&emsp;&emsp;fileName|||false|string||
|&emsp;&emsp;&emsp;&emsp;lineNumber|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;methodName|||false|string||
|&emsp;&emsp;&emsp;&emsp;nativeMethod|||false|boolean||
|&emsp;&emsp;suppressed||array|Throwable|
|&emsp;&emsp;&emsp;&emsp;cause|||false|Throwable|Throwable|
|&emsp;&emsp;&emsp;&emsp;localizedMessage|||false|string||
|&emsp;&emsp;&emsp;&emsp;message|||false|string||
|&emsp;&emsp;&emsp;&emsp;stackTrace|||false|array|StackTraceElement|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;className|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lineNumber|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;methodName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;nativeMethod|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;suppressed|||false|array|Throwable|
|msg||string||
|record||array||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"clientId": 0,
		"createAt": 0,
		"id": 0,
		"pid": 0,
		"title": "",
		"updateAt": 0
	},
	"e": {
		"cause": {
			"cause": {
				"cause": {},
				"localizedMessage": "",
				"message": "",
				"stackTrace": [
					{
						"className": "",
						"fileName": "",
						"lineNumber": 0,
						"methodName": "",
						"nativeMethod": true
					}
				],
				"suppressed": [
					{}
				]
			},
			"localizedMessage": "",
			"message": "",
			"stackTrace": [
				{
					"className": "",
					"fileName": "",
					"lineNumber": 0,
					"methodName": "",
					"nativeMethod": true
				}
			],
			"suppressed": [
				{}
			]
		},
		"localizedMessage": "",
		"message": "",
		"stackTrace": [
			{
				"className": "",
				"fileName": "",
				"lineNumber": 0,
				"methodName": "",
				"nativeMethod": true
			}
		],
		"suppressed": [
			{
				"cause": {
					"cause": {},
					"localizedMessage": "",
					"message": "",
					"stackTrace": [
						{
							"className": "",
							"fileName": "",
							"lineNumber": 0,
							"methodName": "",
							"nativeMethod": true
						}
					],
					"suppressed": [
						{}
					]
				},
				"localizedMessage": "",
				"message": "",
				"stackTrace": [
					{
						"className": "",
						"fileName": "",
						"lineNumber": 0,
						"methodName": "",
						"nativeMethod": true
					}
				],
				"suppressed": [
					{}
				]
			}
		]
	},
	"msg": "",
	"record": []
}
```


# 用户相关接口


## 获取用户登记过的店铺


**接口地址**:`/far/api/user/get-user-at-shop`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:参数->对象


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|userId|query|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultData«List«User对象»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||array|User对象|
|&emsp;&emsp;addressId|默认收货地址|integer(int32)||
|&emsp;&emsp;avatarUrl|微信头像|string||
|&emsp;&emsp;balance|用户可用余额|number||
|&emsp;&emsp;city|城市|string||
|&emsp;&emsp;country|国家|string||
|&emsp;&emsp;createTime|创建时间|integer(int32)||
|&emsp;&emsp;expendMoney|实际消费的金额(不含退款)|number||
|&emsp;&emsp;gender|性别|integer(int32)||
|&emsp;&emsp;gradeId|会员等级id|integer(int32)||
|&emsp;&emsp;isDelete|是否删除|integer(int32)||
|&emsp;&emsp;nickName|微信昵称|string||
|&emsp;&emsp;openId|微信openid(唯一标示)|string||
|&emsp;&emsp;payMoney|用户总支付的金额|number||
|&emsp;&emsp;points|用户可用积分|integer(int32)||
|&emsp;&emsp;province|省份|string||
|&emsp;&emsp;updateTime|更新时间|integer(int32)||
|&emsp;&emsp;userId|用户id|integer(int32)||
|&emsp;&emsp;wxappId|小程序id|integer(int32)||
|e||Exception|Exception|
|&emsp;&emsp;cause||Throwable|Throwable|
|&emsp;&emsp;&emsp;&emsp;cause|||false|Throwable|Throwable|
|&emsp;&emsp;&emsp;&emsp;localizedMessage|||false|string||
|&emsp;&emsp;&emsp;&emsp;message|||false|string||
|&emsp;&emsp;&emsp;&emsp;stackTrace|||false|array|StackTraceElement|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;className|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lineNumber|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;methodName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;nativeMethod|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;suppressed|||false|array|Throwable|
|&emsp;&emsp;localizedMessage||string||
|&emsp;&emsp;message||string||
|&emsp;&emsp;stackTrace||array|StackTraceElement|
|&emsp;&emsp;&emsp;&emsp;className|||false|string||
|&emsp;&emsp;&emsp;&emsp;fileName|||false|string||
|&emsp;&emsp;&emsp;&emsp;lineNumber|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;methodName|||false|string||
|&emsp;&emsp;&emsp;&emsp;nativeMethod|||false|boolean||
|&emsp;&emsp;suppressed||array|Throwable|
|&emsp;&emsp;&emsp;&emsp;cause|||false|Throwable|Throwable|
|&emsp;&emsp;&emsp;&emsp;localizedMessage|||false|string||
|&emsp;&emsp;&emsp;&emsp;message|||false|string||
|&emsp;&emsp;&emsp;&emsp;stackTrace|||false|array|StackTraceElement|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;className|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lineNumber|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;methodName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;nativeMethod|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;suppressed|||false|array|Throwable|
|msg||string||
|record||array||


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"addressId": 0,
			"avatarUrl": "",
			"balance": 0,
			"city": "",
			"country": "",
			"createTime": 0,
			"expendMoney": 0,
			"gender": 0,
			"gradeId": 0,
			"isDelete": 0,
			"nickName": "",
			"openId": "",
			"payMoney": 0,
			"points": 0,
			"province": "",
			"updateTime": 0,
			"userId": 0,
			"wxappId": 0
		}
	],
	"e": {
		"cause": {
			"cause": {
				"cause": {},
				"localizedMessage": "",
				"message": "",
				"stackTrace": [
					{
						"className": "",
						"fileName": "",
						"lineNumber": 0,
						"methodName": "",
						"nativeMethod": true
					}
				],
				"suppressed": [
					{}
				]
			},
			"localizedMessage": "",
			"message": "",
			"stackTrace": [
				{
					"className": "",
					"fileName": "",
					"lineNumber": 0,
					"methodName": "",
					"nativeMethod": true
				}
			],
			"suppressed": [
				{}
			]
		},
		"localizedMessage": "",
		"message": "",
		"stackTrace": [
			{
				"className": "",
				"fileName": "",
				"lineNumber": 0,
				"methodName": "",
				"nativeMethod": true
			}
		],
		"suppressed": [
			{
				"cause": {
					"cause": {},
					"localizedMessage": "",
					"message": "",
					"stackTrace": [
						{
							"className": "",
							"fileName": "",
							"lineNumber": 0,
							"methodName": "",
							"nativeMethod": true
						}
					],
					"suppressed": [
						{}
					]
				},
				"localizedMessage": "",
				"message": "",
				"stackTrace": [
					{
						"className": "",
						"fileName": "",
						"lineNumber": 0,
						"methodName": "",
						"nativeMethod": true
					}
				],
				"suppressed": [
					{}
				]
			}
		]
	},
	"msg": "",
	"record": []
}
```