const express = require('express');
const router = express.Router();
const connection = require('../db/sql')
const isEmpty = require('../utils')


/**
 * 添加文章
 * 文章id 分类 文章标题 文章描述 文章图片 文章内容 作者 发布时间
 */
router.post('/addArticle', (req, res, next) => {
    let data = {code:null,data:{},msg:'success'};
    let {className, articleName,articleDesc,articleImg,articleContent,articleAvatar} = req.body;
    let sql = `insert into article (class, title, descFlag, img, content, avatar, createTime) values (?,?,?,?,?,?,now());`
    connection.query(sql, [className, articleName, articleDesc, articleImg, articleContent, articleAvatar],(err, rows, fields) => {
        if (err) throw err
        // console.log(rows)
        if(rows.affectedRows == 1) {
            data["code"] = 200
            res.send(data);
        }else {
            data["msg"] = 'fail'
            res.send(data);
        }
    })
});

/**
 * 删除文章
 * id
 */
router.post('/deteleArticle', (req, res, next) => {
    let data = {code:null,data:{},msg:'success'};
    let {id} = req.body;
    if(isEmpty(id)) {
        data['msg'] = 'id必传'
        res.send(data);
    }
    let sql = `delete from article where id=?;`
    connection.query(sql, [id],(err, rows, fields) => {
        if (err) throw err
        // console.log(rows)
        if(rows.affectedRows == 1) {
            data["code"] = 200
            res.send(data);
        }else {
            data["msg"] = 'fail'
            res.send(data);
        }
    })
});

/**
 * 修改文章
 * (class, title, descFlag, img, content, avatar, time)
 */
router.post('/updateArticle', (req, res, next) => {
    let data = {code:null,data:{},msg:'success'};
    let {id} = req.body;
    if(isEmpty(id)) {
        data['msg'] = 'id必传'
        res.send(data);
    }
    let {className, articleName,articleDesc,articleImg,articleContent,articleAvatar} = req.body;

    let sql = `update article set class=?, title=?, descFlag=?, img=?, content=?, avatar=? where id=?;`
    connection.query(sql, [className, articleName,articleDesc,articleImg,articleContent,articleAvatar, id],(err, rows, fields) => {
        if (err) throw err
        // console.log(rows)
        if(rows.affectedRows == 1) {
            data["code"] = 200
            res.send(data);
        }else {
            data["msg"] = 'fail'
            res.send(data);
        }
    })
});

/**
 * 查询文章
 */
router.post('/queryArticle', (req, res, next) => {
    let data = {code:null,data:{},msg:'success'};
    let {pageNum, pageSize} = req.body
    if(isEmpty(pageNum) || isEmpty(pageSize)) {
        data["msg"] = 'pageNum或者pageSize为空';
        res.send(data);
        return;
    }
    let sql = `select * from article limit ?, ?;`
    connection.query(sql, [(pageNum-1) * pageSize, (pageNum-1) * pageSize + pageSize],(err, rows, fields) => {
        if (err) throw err
        data["data"] = rows;
        res.send(data);
    })
});

/**
 * 根据id查询文章
 */
router.post('/queryArticleById', (req, res, next) => {
    let data = {code:null,data:{},msg:'success'};
    let {id} = req.body
    if(isEmpty(id)) {
        data["msg"] = 'id不能为空';
        res.send(data);
        return;
    }
    let sql = `select * from article where id = ?;`
    connection.query(sql, [id],(err, rows, fields) => {
        if (err) throw err
        data["data"] = rows[0];
        res.send(data);
    })
});


//

module.exports = router;

