package service

import (
	"errors"
	"fmt"
	"gin-vue-devops/global"
	"gin-vue-devops/model"
	"gin-vue-devops/model/request"
	"gin-vue-devops/utils"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
	"text/template"

	"gorm.io/gorm"
)

type tplData struct {
	template         *template.Template
	locationPath     string
	autoCodePath     string
	autoMoveFilePath string
}

//@function: CreateTemp
//@description: 创建代码
//@param: model.AutoCodeStruct
//@return: error

func CreateTemp(autoCode model.AutoCodeStruct) (err error) {
	basePath := "resource/template"
	// 获取 basePath 文件夹下所有tpl文件
	tplFileList, err := GetAllTplFile(basePath, nil)
	if err != nil {
		return err
	}
	dataList := make([]tplData, 0, len(tplFileList))
	fileList := make([]string, 0, len(tplFileList))
	needMkdir := make([]string, 0, len(tplFileList)) // 当文件夹下存在多个tpl文件时，改为map更合理
	// 根据文件路径生成 tplData 结构体，待填充数据
	for _, value := range tplFileList {
		dataList = append(dataList, tplData{locationPath: value})
	}
	// 生成 *Template, 填充 template 字段
	for index, value := range dataList {
		dataList[index].template, err = template.ParseFiles(value.locationPath)
		if err != nil {
			return err
		}
	}

	// 生成文件路径，填充 autoCodePath 字段，readme.txt.tpl不符合规则，需要特殊处理
	// resource/template/web/api.js.tpl -> autoCode/web/autoCode.PackageName/api/autoCode.PackageName.js
	// resource/template/readme.txt.tpl -> autoCode/readme.txt
	autoPath := "autoCode/"
	for index, value := range dataList {
		trimBase := strings.TrimPrefix(value.locationPath, basePath+"/")
		if trimBase == "readme.txt.tpl" {
			dataList[index].autoCodePath = autoPath + "readme.txt"
			continue
		}

		if lastSeparator := strings.LastIndex(trimBase, "/"); lastSeparator != -1 {
			origFileName := strings.TrimSuffix(trimBase[lastSeparator+1:], ".tpl")
			firstDot := strings.Index(origFileName, ".")
			if firstDot != -1 {
				dataList[index].autoCodePath = autoPath + trimBase[:lastSeparator] + "/" + autoCode.PackageName + "/" +
					origFileName[:firstDot] + "/" + autoCode.PackageName + origFileName[firstDot:]
			}
		}

		if lastSeparator := strings.LastIndex(dataList[index].autoCodePath, "/"); lastSeparator != -1 {
			needMkdir = append(needMkdir, dataList[index].autoCodePath[:lastSeparator])
		}
	}

	// 写入文件前，先创建文件夹
	if err = utils.CreateDir(needMkdir...); err != nil {
		return err
	}

	// 生成文件
	for _, value := range dataList {
		fileList = append(fileList, value.autoCodePath)
		f, err := os.OpenFile(value.autoCodePath, os.O_CREATE|os.O_WRONLY, 0755)
		if err != nil {
			return err
		}
		if err = value.template.Execute(f, autoCode); err != nil {
			return err
		}
		_ = f.Close()
	}

	defer func() { // 移除中间文件
		if err := os.RemoveAll(autoPath); err != nil {
			return
		}
	}()
	if autoCode.AutoMoveFile { // 判断是否需要自动转移
		for index, _ := range dataList {
			addAutoMoveFile(&dataList[index])
		}
		for _, value := range dataList { // 移动文件
			if err := utils.FileMove(value.autoCodePath, value.autoMoveFilePath); err != nil {
				fmt.Println(err)
				return err
			}
		}
		return errors.New("创建代码成功并移动文件成功")
	} else { // 打包
		if err := utils.ZipFiles("./ginvueadmin.zip", fileList, ".", "."); err != nil {
			return err
		}
	}
	return nil
}

//@function: GetAllTplFile
//@description: 获取 pathName 文件夹下所有 tpl 文件
//@param: pathName string, fileList []string
//@return: []string, error

func GetAllTplFile(pathName string, fileList []string) ([]string, error) {
	files, err := ioutil.ReadDir(pathName)
	for _, fi := range files {
		if fi.IsDir() {
			fileList, err = GetAllTplFile(pathName+"/"+fi.Name(), fileList)
			if err != nil {
				return nil, err
			}
		} else {
			if strings.HasSuffix(fi.Name(), ".tpl") {
				fileList = append(fileList, pathName+"/"+fi.Name())
			}
		}
	}
	return fileList, err
}

//@function: GetTables
//@description: 获取数据库的所有表名
//@param: pathName string
//@param: fileList []string
//@return: []string, error

func GetTables(dbName string) (err error, TableNames []request.TableReq) {
	err = global.GVA_DB.Raw("select table_name as table_name from information_schema.tables where table_schema = ?", dbName).Scan(&TableNames).Error
	return err, TableNames
}

//@function: GetDB
//@description: 获取数据库的所有数据库名
//@param: pathName string
//@param: fileList []string
//@return: []string, error

func GetDB() (err error, DBNames []request.DBReq) {
	err = global.GVA_DB.Raw("SELECT SCHEMA_NAME AS `database` FROM INFORMATION_SCHEMA.SCHEMATA;").Scan(&DBNames).Error
	return err, DBNames
}

//@function: GetDB
//@description: 获取指定数据库和指定数据表的所有字段名,类型值等
//@param: pathName string
//@param: fileList []string
//@return: []string, error

func GetColumn(tableName string, dbName string) (err error, Columns []request.ColumnReq) {
	err = global.GVA_DB.Raw("SELECT COLUMN_NAME column_name,DATA_TYPE data_type,CASE DATA_TYPE WHEN 'longtext' THEN c.CHARACTER_MAXIMUM_LENGTH WHEN 'varchar' THEN c.CHARACTER_MAXIMUM_LENGTH WHEN 'double' THEN CONCAT_WS( ',', c.NUMERIC_PRECISION, c.NUMERIC_SCALE ) WHEN 'decimal' THEN CONCAT_WS( ',', c.NUMERIC_PRECISION, c.NUMERIC_SCALE ) WHEN 'int' THEN c.NUMERIC_PRECISION WHEN 'bigint' THEN c.NUMERIC_PRECISION ELSE '' END AS data_type_long,COLUMN_COMMENT column_comment FROM INFORMATION_SCHEMA.COLUMNS c WHERE table_name = ? AND table_schema = ?", tableName, dbName).Scan(&Columns).Error
	return err, Columns
}

//@function: addAutoMoveFile
//@description: 生成对应的迁移文件路径
//@param: *tplData
//@return: null

func addAutoMoveFile(data *tplData) {
	dir := filepath.Base(filepath.Dir(data.autoCodePath))
	base := filepath.Base(data.autoCodePath)
	if strings.Contains(data.autoCodePath, "server") {
		if strings.Contains(data.autoCodePath, "router") {
			data.autoMoveFilePath = filepath.Join(dir, base)
		} else if strings.Contains(data.autoCodePath, "api") {
			data.autoMoveFilePath = filepath.Join(dir, "v1", base)
		} else if strings.Contains(data.autoCodePath, "service") {
			data.autoMoveFilePath = filepath.Join(dir, base)
		} else if strings.Contains(data.autoCodePath, "model") {
			data.autoMoveFilePath = filepath.Join(dir, base)
		} else if strings.Contains(data.autoCodePath, "request") {
			data.autoMoveFilePath = filepath.Join("model", dir, base)
		}
	} else if strings.Contains(data.autoCodePath, "web") {
		if strings.Contains(data.autoCodePath, "js") {
			data.autoMoveFilePath = filepath.Join("../", "web", "src", dir, base)
		} else if strings.Contains(data.autoCodePath, "form") {
			data.autoMoveFilePath = filepath.Join("../", "web", "src", "view", filepath.Base(filepath.Dir(filepath.Dir(data.autoCodePath))), strings.TrimSuffix(base, filepath.Ext(base))+"Form.vue")
		} else if strings.Contains(data.autoCodePath, "table") {
			data.autoMoveFilePath = filepath.Join("../", "web", "src", "view", filepath.Base(filepath.Dir(filepath.Dir(data.autoCodePath))), base)
		}
	}
}

//@function: CreateApi
//@description: 自动创建api数据,
//@param: a *model.AutoCodeStruct
//@return: error

func AutoCreateApi(a *model.AutoCodeStruct) (err error) {
	var apiList = []model.SysApi{
		{
			Path:        "/" + a.Abbreviation + "/" + "create" + a.StructName,
			Description: "新增" + a.Description,
			ApiGroup:    a.Abbreviation,
			Method:      "POST",
		},
		{
			Path:        "/" + a.Abbreviation + "/" + "delete" + a.StructName,
			Description: "删除" + a.Description,
			ApiGroup:    a.Abbreviation,
			Method:      "DELETE",
		},
		{
			Path:        "/" + a.Abbreviation + "/" + "delete" + a.StructName + "ByIds",
			Description: "批量删除" + a.Description,
			ApiGroup:    a.Abbreviation,
			Method:      "DELETE",
		},
		{
			Path:        "/" + a.Abbreviation + "/" + "update" + a.StructName,
			Description: "更新" + a.Description,
			ApiGroup:    a.Abbreviation,
			Method:      "PUT",
		},
		{
			Path:        "/" + a.Abbreviation + "/" + "find" + a.StructName,
			Description: "根据ID获取" + a.Description,
			ApiGroup:    a.Abbreviation,
			Method:      "GET",
		},
		{
			Path:        "/" + a.Abbreviation + "/" + "get" + a.StructName + "List",
			Description: "获取" + a.Description + "列表",
			ApiGroup:    a.Abbreviation,
			Method:      "GET",
		},
	}
	err = global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		for _, v := range apiList {
			var api model.SysApi
			if errors.Is(tx.Where("path = ? AND method = ?", v.Path, v.Method).First(&api).Error, gorm.ErrRecordNotFound) {
				if err := tx.Create(&v).Error; err != nil { // 遇到错误时回滚事务
					return err
				}
			}
		}
		return nil
	})
	return err
}
